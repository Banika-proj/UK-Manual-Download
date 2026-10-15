/* ============================================================
   UK MANUAL DOWNLOAD TRACKER
   Cloudflare Pages Functions + D1 API

   File:
   functions/api/[[path]].js

   D1 binding expected:
   env.DB
   ============================================================ */


/* ============================================================
   RESPONSE HELPERS
   ============================================================ */

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      "Cache-Control": "no-store"
    }
  });
}


function errorResponse(message, status = 400) {
  return json(
    {
      ok: false,
      error: message
    },
    status
  );
}


async function getBody(request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}


/* ============================================================
   ROUTE HELPERS
   ============================================================ */

function getPathParts(context) {
  const path = context.params.path;

  if (Array.isArray(path)) {
    return path.filter(Boolean);
  }

  if (typeof path === "string") {
    return path
      .split("/")
      .filter(Boolean);
  }

  return [];
}


function parseId(value) {
  const id = Number(value);

  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}


function clean(value) {
  return value === undefined ? null : value;
}


/* ============================================================
   MAIN REQUEST HANDLER
   ============================================================ */

export async function onRequest(context) {

  const { request, env } = context;

  if (!env.DB) {
    return errorResponse(
      "D1 database binding DB is not configured.",
      500
    );
  }

  const method = request.method.toUpperCase();
  const parts = getPathParts(context);

  try {

    /* --------------------------------------------------------
       API health check
       GET /api
       -------------------------------------------------------- */

    if (parts.length === 0 && method === "GET") {

      return json({
        ok: true,
        service: "UK Manual Download API"
      });
    }


    /* ========================================================
       PUBLICATIONS
       ======================================================== */

    if (parts[0] === "publications") {

      /* ------------------------------------------------------
         GET /api/publications
         ------------------------------------------------------ */

      if (
        method === "GET" &&
        parts.length === 1
      ) {

        const result = await env.DB
          .prepare(`
            SELECT
              id,
              name,
              link,
              frequency,
              publication_date,
              expected_date,
              login,
              password,
              is_active,
              deleted_at,
              created_at,
              updated_at
            FROM publications
            ORDER BY id
          `)
          .all();

        return json({
          ok: true,
          publications: result.results || []
        });
      }


      /* ------------------------------------------------------
         POST /api/publications
         Create publication
         ------------------------------------------------------ */

      if (
        method === "POST" &&
        parts.length === 1
      ) {

        const data = await getBody(request);

        if (!data) {
          return errorResponse(
            "Invalid request body."
          );
        }

        const name =
          String(data.name || "").trim();

        if (!name) {
          return errorResponse(
            "Publication name is required."
          );
        }

        /*
          An ID can optionally be supplied.
          This is useful when importing/initially seeding
          the existing publication master list.
        */

        if (data.id !== undefined && data.id !== null) {

          const requestedId =
            parseId(data.id);

          if (!requestedId) {
            return errorResponse(
              "Invalid publication ID."
            );
          }

          await env.DB
            .prepare(`
              INSERT INTO publications (
                id,
                name,
                link,
                frequency,
                publication_date,
                expected_date,
                login,
                password,
                is_active,
                deleted_at,
                created_at,
                updated_at
              )
              VALUES (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                NULL,
                CURRENT_TIMESTAMP,
                CURRENT_TIMESTAMP
              )
            `)
            .bind(
              requestedId,
              name,
              clean(data.link),
              clean(data.frequency),
              clean(data.publication_date),
              clean(data.expected_date),
              clean(data.login),
              clean(data.password),
              data.is_active === 0 ? 0 : 1
            )
            .run();

          return json(
            {
              ok: true,
              id: requestedId
            },
            201
          );
        }


        const result = await env.DB
          .prepare(`
            INSERT INTO publications (
              name,
              link,
              frequency,
              publication_date,
              expected_date,
              login,
              password,
              is_active,
              deleted_at,
              created_at,
              updated_at
            )
            VALUES (
              ?,
              ?,
              ?,
              ?,
              ?,
              ?,
              ?,
              ?,
              NULL,
              CURRENT_TIMESTAMP,
              CURRENT_TIMESTAMP
            )
          `)
          .bind(
            name,
            clean(data.link),
            clean(data.frequency),
            clean(data.publication_date),
            clean(data.expected_date),
            clean(data.login),
            clean(data.password),
            data.is_active === 0 ? 0 : 1
          )
          .run();

        return json(
          {
            ok: true,
            id: result.meta?.last_row_id ?? null
          },
          201
        );
      }


      /* ------------------------------------------------------
         PUT /api/publications/:id
         Update publication
         ------------------------------------------------------ */

      if (
        method === "PUT" &&
        parts.length === 2
      ) {

        const id =
          parseId(parts[1]);

        if (!id) {
          return errorResponse(
            "Invalid publication ID."
          );
        }

        const data =
          await getBody(request);

        if (!data) {
          return errorResponse(
            "Invalid request body."
          );
        }

        const name =
          String(data.name || "").trim();

        if (!name) {
          return errorResponse(
            "Publication name is required."
          );
        }

        const existing =
          await env.DB
            .prepare(`
              SELECT id
              FROM publications
              WHERE id = ?
            `)
            .bind(id)
            .first();

        if (!existing) {
          return errorResponse(
            "Publication not found.",
            404
          );
        }

        await env.DB
          .prepare(`
            UPDATE publications
            SET
              name = ?,
              link = ?,
              frequency = ?,
              publication_date = ?,
              expected_date = ?,
              login = ?,
              password = ?,
              is_active = ?,
              updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
          `)
          .bind(
            name,
            clean(data.link),
            clean(data.frequency),
            clean(data.publication_date),
            clean(data.expected_date),
            clean(data.login),
            clean(data.password),
            data.is_active === 0 ? 0 : 1,
            id
          )
          .run();

        return json({
          ok: true
        });
      }


      /* ------------------------------------------------------
         DELETE /api/publications/:id
         Archive publication
         ------------------------------------------------------ */

      if (
        method === "DELETE" &&
        parts.length === 2
      ) {

        const id =
          parseId(parts[1]);

        if (!id) {
          return errorResponse(
            "Invalid publication ID."
          );
        }

        await env.DB
          .prepare(`
            UPDATE publications
            SET
              is_active = 0,
              deleted_at = CURRENT_TIMESTAMP,
              updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
          `)
          .bind(id)
          .run();

        return json({
          ok: true
        });
      }


      /* ------------------------------------------------------
         POST /api/publications/:id/restore
         Restore archived publication
         ------------------------------------------------------ */

      if (
        method === "POST" &&
        parts.length === 3 &&
        parts[2] === "restore"
      ) {

        const id =
          parseId(parts[1]);

        if (!id) {
          return errorResponse(
            "Invalid publication ID."
          );
        }

        await env.DB
          .prepare(`
            UPDATE publications
            SET
              is_active = 1,
              deleted_at = NULL,
              updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
          `)
          .bind(id)
          .run();

        return json({
          ok: true
        });
      }


      /* ------------------------------------------------------
         DELETE /api/publications/:id/permanent

         Permanently delete publication plus associated
         logs and notes.
         ------------------------------------------------------ */

      if (
        method === "DELETE" &&
        parts.length === 3 &&
        parts[2] === "permanent"
      ) {

        const id =
          parseId(parts[1]);

        if (!id) {
          return errorResponse(
            "Invalid publication ID."
          );
        }

        await env.DB.batch([

          env.DB
            .prepare(`
              DELETE FROM notes
              WHERE publication_id = ?
            `)
            .bind(id),

          env.DB
            .prepare(`
              DELETE FROM download_logs
              WHERE publication_id = ?
            `)
            .bind(id),

          env.DB
            .prepare(`
              DELETE FROM publications
              WHERE id = ?
            `)
            .bind(id)

        ]);

        return json({
          ok: true
        });
      }


      return errorResponse(
        "Publication endpoint not found.",
        404
      );
    }


    /* ========================================================
       DOWNLOAD LOGS
       ======================================================== */

    if (parts[0] === "logs") {

      /* ------------------------------------------------------
         GET /api/logs
         ------------------------------------------------------ */

      if (
        method === "GET" &&
        parts.length === 1
      ) {

        const result =
          await env.DB
            .prepare(`
              SELECT
                id,
                publication_id,
                log_date,
                downloaded,
                time_downloaded,
                reason_when_no,
                created_by,
                created_at
              FROM download_logs
              ORDER BY
                log_date DESC,
                id DESC
            `)
            .all();

        return json({
          ok: true,
          logs: result.results || []
        });
      }


      /* ------------------------------------------------------
         POST /api/logs

         Upsert a publication/date log.
         ------------------------------------------------------ */

      if (
        method === "POST" &&
        parts.length === 1
      ) {

        const data =
          await getBody(request);

        if (!data) {
          return errorResponse(
            "Invalid request body."
          );
        }

        const publicationId =
          parseId(data.publication_id);

        if (!publicationId) {
          return errorResponse(
            "publication_id is required."
          );
        }

        const logDate =
          String(data.log_date || "").trim();

        if (!logDate) {
          return errorResponse(
            "log_date is required."
          );
        }

        const existing =
          await env.DB
            .prepare(`
              SELECT id
              FROM download_logs
              WHERE
                publication_id = ?
                AND log_date = ?
              ORDER BY id DESC
              LIMIT 1
            `)
            .bind(
              publicationId,
              logDate
            )
            .first();

        if (existing) {

          await env.DB
            .prepare(`
              UPDATE download_logs
              SET
                downloaded = ?,
                time_downloaded = ?,
                reason_when_no = ?,
                created_by = ?
              WHERE id = ?
            `)
            .bind(
              clean(data.downloaded),
              clean(data.time_downloaded),
              clean(data.reason_when_no),
              clean(data.created_by),
              existing.id
            )
            .run();

          return json({
            ok: true,
            id: existing.id,
            updated: true
          });
        }


        const result =
          await env.DB
            .prepare(`
              INSERT INTO download_logs (
                publication_id,
                log_date,
                downloaded,
                time_downloaded,
                reason_when_no,
                created_by,
                created_at
              )
              VALUES (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                CURRENT_TIMESTAMP
              )
            `)
            .bind(
              publicationId,
              logDate,
              clean(data.downloaded),
              clean(data.time_downloaded),
              clean(data.reason_when_no),
              clean(data.created_by)
            )
            .run();

        return json(
          {
            ok: true,
            id:
              result.meta?.last_row_id ??
              null,
            created: true
          },
          201
        );
      }


      /* ------------------------------------------------------
         DELETE
         /api/logs/by-publication/:publicationId/:date

         Used by Undo in app.js.
         ------------------------------------------------------ */

      if (
        method === "DELETE" &&
        parts.length === 4 &&
        parts[1] === "by-publication"
      ) {

        const publicationId =
          parseId(parts[2]);

        const logDate =
          parts[3];

        if (!publicationId) {
          return errorResponse(
            "Invalid publication ID."
          );
        }

        if (!logDate) {
          return errorResponse(
            "Log date is required."
          );
        }

        await env.DB
          .prepare(`
            DELETE FROM download_logs
            WHERE
              publication_id = ?
              AND log_date = ?
          `)
          .bind(
            publicationId,
            logDate
          )
          .run();

        return json({
          ok: true
        });
      }


      return errorResponse(
        "Log endpoint not found.",
        404
      );
    }


    /* ========================================================
       NOTES
       ======================================================== */

    if (parts[0] === "notes") {

      /* ------------------------------------------------------
         GET /api/notes
         ------------------------------------------------------ */

      if (
        method === "GET" &&
        parts.length === 1
      ) {

        const result =
          await env.DB
            .prepare(`
              SELECT
                id,
                publication_id,
                entry_date,
                note_date,
                comment,
                created_by,
                created_at
              FROM notes
              ORDER BY
                entry_date DESC,
                id DESC
            `)
            .all();

        return json({
          ok: true,
          notes: result.results || []
        });
      }


      /* ------------------------------------------------------
         POST /api/notes
         ------------------------------------------------------ */

      if (
        method === "POST" &&
        parts.length === 1
      ) {

        const data =
          await getBody(request);

        if (!data) {
          return errorResponse(
            "Invalid request body."
          );
        }

        const publicationId =
          parseId(data.publication_id);

        if (!publicationId) {
          return errorResponse(
            "publication_id is required."
          );
        }

        const entryDate =
          String(data.entry_date || "").trim();

        if (!entryDate) {
          return errorResponse(
            "entry_date is required."
          );
        }

        const comment =
          String(data.comment || "").trim();

        if (!comment) {
          return errorResponse(
            "Comment is required."
          );
        }

        const result =
          await env.DB
            .prepare(`
              INSERT INTO notes (
                publication_id,
                entry_date,
                note_date,
                comment,
                created_by,
                created_at
              )
              VALUES (
                ?,
                ?,
                ?,
                ?,
                ?,
                CURRENT_TIMESTAMP
              )
            `)
            .bind(
              publicationId,
              entryDate,
              clean(data.note_date),
              comment,
              clean(data.created_by)
            )
            .run();

        return json(
          {
            ok: true,
            id:
              result.meta?.last_row_id ??
              null
          },
          201
        );
      }


      /* ------------------------------------------------------
         DELETE /api/notes/:id
         ------------------------------------------------------ */

      if (
        method === "DELETE" &&
        parts.length === 2
      ) {

        const id =
          parseId(parts[1]);

        if (!id) {
          return errorResponse(
            "Invalid note ID."
          );
        }

        await env.DB
          .prepare(`
            DELETE FROM notes
            WHERE id = ?
          `)
          .bind(id)
          .run();

        return json({
          ok: true
        });
      }


      return errorResponse(
        "Notes endpoint not found.",
        404
      );
    }


    /* ========================================================
       INITIAL SEED
       ======================================================== */

    if (
      parts[0] === "seed" &&
      parts.length === 1
    ) {

      if (method !== "POST") {
        return errorResponse(
          "Method not allowed.",
          405
        );
      }

      const data =
        await getBody(request);

      if (
        !data ||
        !Array.isArray(data.publications)
      ) {

        return errorResponse(
          "publications array is required."
        );
      }


      /*
        Safety check:
        only seed when publications is empty.
      */

      const countRow =
        await env.DB
          .prepare(`
            SELECT COUNT(*) AS total
            FROM publications
          `)
          .first();

      const currentCount =
        Number(countRow?.total || 0);

      if (currentCount > 0) {
        return json({
          ok: true,
          seeded: false,
          message:
            "Publications table already contains data."
        });
      }


      if (data.publications.length === 0) {
        return json({
          ok: true,
          seeded: false,
          count: 0
        });
      }


      const statements =
        data.publications.map(pub => {

          return env.DB
            .prepare(`
              INSERT INTO publications (
                id,
                name,
                link,
                frequency,
                publication_date,
                expected_date,
                login,
                password,
                is_active,
                deleted_at,
                created_at,
                updated_at
              )
              VALUES (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                NULL,
                CURRENT_TIMESTAMP,
                CURRENT_TIMESTAMP
              )
            `)
            .bind(
              pub.id,
              String(
                pub.name || ""
              ).trim(),
              clean(pub.link),
              clean(pub.frequency),
              clean(pub.publication_date),
              clean(pub.expected_date),
              clean(pub.login),
              clean(pub.password),
              pub.is_active === 0
                ? 0
                : 1
            );
        });


      /*
        Process in chunks rather than constructing
        one extremely large operation.
      */

      const chunkSize = 50;

      for (
        let i = 0;
        i < statements.length;
        i += chunkSize
      ) {

        await env.DB.batch(
          statements.slice(
            i,
            i + chunkSize
          )
        );
      }


      return json({
        ok: true,
        seeded: true,
        count:
          data.publications.length
      });
    }


    /* ========================================================
       BACKUP RESTORE
       ======================================================== */

    if (
      parts[0] === "backup" &&
      parts.length === 1
    ) {

      if (method !== "PUT") {
        return errorResponse(
          "Method not allowed.",
          405
        );
      }

      const data =
        await getBody(request);


      if (
        !data ||
        !Array.isArray(data.publications) ||
        !Array.isArray(data.logs)
      ) {

        return errorResponse(
          "Invalid backup structure."
        );
      }


      const notes =
        Array.isArray(data.notes)
          ? data.notes
          : [];


      /*
        Clear child records first.
      */

      await env.DB.batch([

        env.DB.prepare(`
          DELETE FROM notes
        `),

        env.DB.prepare(`
          DELETE FROM download_logs
        `),

        env.DB.prepare(`
          DELETE FROM publications
        `)

      ]);


      /* ------------------------------------------------------
         Restore publications
         ------------------------------------------------------ */

      if (data.publications.length) {

        const statements =
          data.publications.map(pub =>

            env.DB
              .prepare(`
                INSERT INTO publications (
                  id,
                  name,
                  link,
                  frequency,
                  publication_date,
                  expected_date,
                  login,
                  password,
                  is_active,
                  deleted_at,
                  created_at,
                  updated_at
                )
                VALUES (
                  ?,
                  ?,
                  ?,
                  ?,
                  ?,
                  ?,
                  ?,
                  ?,
                  ?,
                  ?,
                  ?,
                  ?
                )
              `)
              .bind(
                pub.id,
                pub.name,
                clean(
                  pub.link
                ),
                clean(
                  pub.frequency
                ),
                clean(
                  pub.publicationDate ??
                  pub.publication_date
                ),
                clean(
                  pub.expectedDate ??
                  pub.expected_date
                ),
                clean(
                  pub.login
                ),
                clean(
                  pub.password
                ),
                (
                  pub.isActive ??
                  pub.is_active
                )
                  ? 1
                  : 0,
                clean(
                  pub.deletedAt ??
                  pub.deleted_at
                ),
                clean(
                  pub.createdAt ??
                  pub.created_at ??
                  new Date().toISOString()
                ),
                clean(
                  pub.updatedAt ??
                  pub.updated_at ??
                  new Date().toISOString()
                )
              )
          );

        await runBatches(
          env.DB,
          statements
        );
      }


      /* ------------------------------------------------------
         Restore logs
         ------------------------------------------------------ */

      if (data.logs.length) {

        const statements =
          data.logs.map(log =>

            env.DB
              .prepare(`
                INSERT INTO download_logs (
                  id,
                  publication_id,
                  log_date,
                  downloaded,
                  time_downloaded,
                  reason_when_no,
                  created_by,
                  created_at
                )
                VALUES (
                  ?,
                  ?,
                  ?,
                  ?,
                  ?,
                  ?,
                  ?,
                  ?
                )
              `)
              .bind(
                log.id,
                log.publicationId ??
                  log.publication_id,
                log.logDate ??
                  log.log_date,
                clean(
                  log.downloaded
                ),
                clean(
                  log.timeDownloaded ??
                  log.time_downloaded
                ),
                clean(
                  log.reasonWhenNo ??
                  log.reason_when_no
                ),
                clean(
                  log.createdBy ??
                  log.created_by
                ),
                clean(
                  log.createdAt ??
                  log.created_at ??
                  new Date().toISOString()
                )
              )
          );

        await runBatches(
          env.DB,
          statements
        );
      }


      /* ------------------------------------------------------
         Restore notes
         ------------------------------------------------------ */

      if (notes.length) {

        const statements =
          notes.map(note =>

            env.DB
              .prepare(`
                INSERT INTO notes (
                  id,
                  publication_id,
                  entry_date,
                  note_date,
                  comment,
                  created_by,
                  created_at
                )
                VALUES (
                  ?,
                  ?,
                  ?,
                  ?,
                  ?,
                  ?,
                  ?
                )
              `)
              .bind(
                note.id,
                note.publicationId ??
                  note.publication_id,
                note.entryDate ??
                  note.entry_date,
                clean(
                  note.noteDate ??
                  note.note_date
                ),
                note.comment,
                clean(
                  note.createdBy ??
                  note.created_by
                ),
                clean(
                  note.createdAt ??
                  note.created_at ??
                  new Date().toISOString()
                )
              )
          );

        await runBatches(
          env.DB,
          statements
        );
      }


      return json({
        ok: true,
        restored: true
      });
    }


    /* ========================================================
       UNKNOWN ENDPOINT
       ======================================================== */

    return errorResponse(
      "API endpoint not found.",
      404
    );


  } catch (error) {

    console.error(
      "UK Manual Download API error:",
      error
    );

    return json(
      {
        ok: false,
        error:
          "Database operation failed.",
        message:
          error?.message ||
          "Unknown error"
      },
      500
    );
  }
}


/* ============================================================
   D1 BATCH HELPER
   ============================================================ */

async function runBatches(
  db,
  statements,
  chunkSize = 50
) {

  for (
    let i = 0;
    i < statements.length;
    i += chunkSize
  ) {

    await db.batch(
      statements.slice(
        i,
        i + chunkSize
      )
    );
  }
}
