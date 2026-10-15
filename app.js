/* ============================================================
   SEED DATA
   ============================================================ */
const SEED_PUBLICATIONS = [
{id:1,name:"Travel Daily Asia",link:"Newsletter to pubs mailbox",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:2,name:"Londonist Newsletter",link:"Newsletter to pubs mailbox",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:3,name:"CoStar News",link:"Newsletter to pubs mailbox",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:4,name:"Breaking Travel News Daily",link:"Newsletter to pubs mailbox",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:5,name:"Irish Independent",link:"https://epaper.independentnewsstand.ie/titles",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:6,name:"Insider Daily (North West Business) Newsletter",link:"http://www.insidermedia.com/newsletters/index.html",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:7,name:"Insider Daily (West Midlands Business) Newsletter",link:"http://www.insidermedia.com/newsletters/index.html",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:8,name:"Insider Daily (South West Business) Newsletter",link:"http://www.insidermedia.com/newsletters/index.html",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:9,name:"Insider Daily (Yorkshire) Newsletter",link:"http://www.insidermedia.com/newsletters/index.html",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:10,name:"Insider Daily (East Midlands Business) Newsletter",link:"http://www.insidermedia.com/newsletters/index.html",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:11,name:"Insider Daily (South East Business)",link:"http://www.insidermedia.com/newsletters/index.html",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:12,name:"Insider Daily (Wales Business)",link:"http://www.insidermedia.com/newsletters/index.html",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:13,name:"Insider Daily (North East Business) Newsletter",link:"http://www.insidermedia.com/newsletters/index.html",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:14,name:"Insider Daily (Irish Business)",link:"http://www.insidermedia.com/newsletters/index.html",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:15,name:"Insider Daily (Liverpool Business) Newsletter",link:"http://www.insidermedia.com/newsletters/index.html",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:16,name:"Morning Star",link:"https://morningstaronline.co.uk/digital-edition",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:17,name:"London Daily Digital",link:"https://epaper.ldd.news/?_gl=1%2A18bxq0d%2A_ga%2AMTE1MjkwODg1Mi4xNzg5NjM2NjU5%2A_ga_21YTZNR20G%2Acz…",frequency:"daily",publicationDate:null,expectedDate:null,login:null,password:null,isActive:true},
{id:18,name:"Seniors Housing Weekly News",link:"Newsletter to pubs mailbox",frequency:"weekly",publicationDate:"Monday",expectedDate:"Monday",login:null,password:null,isActive:true},
{id:19,name:"SoGlos",link:"arrives in mailbox",frequency:"weekly",publicationDate:"Monday",expectedDate:"Monday",login:null,password:null,isActive:true},
{id:20,name:"Rise & Shine Newsletter",link:"arrives in mailbox",frequency:"weekly",publicationDate:"Monday",expectedDate:"Monday",login:null,password:null,isActive:true},
{id:21,name:"Automotive News (USA)",link:"emailed to publications Mailbox each friday",frequency:"weekly",publicationDate:"Monday",expectedDate:"Monday",login:null,password:null,isActive:true},
{id:22,name:"Irish Sunday Independent",link:"https://epaper.independentnewsstand.ie/titles",frequency:"weekly",publicationDate:"Sunday",expectedDate:"Sunday",login:null,password:null,isActive:true},
{id:23,name:"TMB Weekly",link:"arrives in mailbox",frequency:"weekly",publicationDate:"Tuesday",expectedDate:"Tuesday",login:null,password:null,isActive:true},
{id:24,name:"Computer Weekly",link:"https://www.computerweekly.com/",frequency:"weekly",publicationDate:"Tuesday",expectedDate:"Tuesday",login:null,password:null,isActive:true},
{id:25,name:"Moneysaving Expert",link:"Newsletter to pubs mailbox",frequency:"weekly",publicationDate:"Tuesday",expectedDate:"Tuesday",login:null,password:null,isActive:true},
{id:26,name:"Slice Newsletter (Metro)",link:"Publication mailbox",frequency:"weekly",publicationDate:"Wednesday",expectedDate:"Wednesday",login:null,password:null,isActive:true},
{id:27,name:"Locks & Security News",link:"http://www.locksandsecuritynews.com",frequency:"weekly",publicationDate:"Wednesday",expectedDate:"Wednesday",login:null,password:null,isActive:true},
{id:28,name:"Education Journal",link:"emailed to publications Mailbox each friday",frequency:"weekly",publicationDate:"Wednesday",expectedDate:"Wednesday",login:null,password:null,isActive:true},
{id:29,name:"Insider Daily (Central & East)",link:"emailed to publications Mailbox each friday",frequency:"weekly",publicationDate:"Wednesday",expectedDate:"Wednesday",login:null,password:null,isActive:true},
{id:30,name:"Tyrone Courier",link:"https://www.tyronecourier.co.uk/",frequency:"weekly",publicationDate:"Wednesday",expectedDate:"Wednesday",login:null,password:null,isActive:true},
{id:31,name:"Ulster Herald",link:"https://wearetyrone.com/",frequency:"weekly",publicationDate:"Thursday",expectedDate:"Thursday",login:null,password:null,isActive:true},
{id:32,name:"Cleanzine, The",link:"Newsletter to pubs mailbox",frequency:"weekly",publicationDate:"Thursday",expectedDate:"Thursday",login:null,password:null,isActive:true},
{id:33,name:"Ballymena Guardian",link:"https://www.ballymenaguardian.co.uk/",frequency:"weekly",publicationDate:"Thursday",expectedDate:"Thursday",login:null,password:null,isActive:true},
{id:34,name:"Coleraine Chronicle",link:"https://www.colerainechronicle.co.uk/",frequency:"weekly",publicationDate:"Thursday",expectedDate:"Thursday",login:null,password:null,isActive:true},
{id:35,name:"Strabane Weekly News",link:"https://www.strabaneweekly.co.uk/",frequency:"weekly",publicationDate:"Thursday",expectedDate:"Thursday",login:null,password:null,isActive:true},
{id:36,name:"Tyrone Constitution",link:"https://www.tyronecon.co.uk/",frequency:"weekly",publicationDate:"Thursday",expectedDate:"Thursday",login:null,password:null,isActive:true},
{id:37,name:"Ulster Gazette & Armagh Standard",link:"https://www.ulstergazette.co.uk/",frequency:"weekly",publicationDate:"Thursday",expectedDate:"Thursday",login:null,password:null,isActive:true},
{id:38,name:"Oban Times",link:"https://www.westcoasttoday.co.uk/digital-editions-channel",frequency:"weekly",publicationDate:"Thursday",expectedDate:"Thursday",login:null,password:null,isActive:true},
{id:39,name:"New European, The",link:"https://www.thenewworld.co.uk/page-turner/",frequency:"weekly",publicationDate:"Thursday",expectedDate:"Thursday",login:null,password:null,isActive:true},
{id:40,name:"Travel Weekly",link:"https://travelweekly.co.uk/latest-edition",frequency:"weekly",publicationDate:"Thursday",expectedDate:"Thursday",login:null,password:null,isActive:true},
{id:41,name:"Wealden Advertiser",link:"https://www.wealdenad.co.uk/",frequency:"weekly",publicationDate:"Friday",expectedDate:"Friday",login:null,password:null,isActive:true},
{id:42,name:"Argyllshire Advertiser",link:"https://www.westcoasttoday.co.uk/digital-editions-channel",frequency:"weekly",publicationDate:"Friday",expectedDate:"Friday",login:null,password:null,isActive:true},
{id:43,name:"West Highland Free Press",link:"Arrives in publication mailbox  - from Lesley Young",frequency:"weekly",publicationDate:"Friday",expectedDate:"Friday",login:null,password:null,isActive:true},
{id:44,name:"AgriTrade News",link:"emailed to publications Mailbox each friday",frequency:"weekly",publicationDate:"Friday",expectedDate:"Friday",login:null,password:null,isActive:true},
{id:45,name:"Arran Banner",link:"https://www.westcoasttoday.co.uk/digital-editions-channel?search=scoped&topics=Arran%20Banner",frequency:"weekly",publicationDate:"Friday",expectedDate:"Friday",login:null,password:null,isActive:true},
{id:46,name:"Borough of Hounslow Herald, The",link:"emailed to publications Mailbox each friday",frequency:"weekly",publicationDate:"Friday",expectedDate:"Friday",login:null,password:null,isActive:true},
{id:47,name:"Asian Lite",link:"https://epaper.asianlite.com/",frequency:"weekly",publicationDate:"Friday",expectedDate:"Friday",login:null,password:null,isActive:true},
{id:48,name:"Barnsley Chronicle",link:"https://www.barnsleychronicle.com/epaper",frequency:"weekly",publicationDate:"Friday",expectedDate:"Friday",login:null,password:null,isActive:true},
{id:49,name:"Campbeltown Courier",link:"https://www.westcoasttoday.co.uk/digital-editions-channel",frequency:"weekly",publicationDate:"Friday",expectedDate:"Friday",login:null,password:null,isActive:true},
{id:50,name:"International Travel Writers Alliance Bulletin",link:"http://www.itwalliance.com/",frequency:"fortnightly",publicationDate:"1st and 15th of each month",expectedDate:"Friday",login:null,password:null,isActive:true},
{id:51,name:"Bus & Coach Buyer",link:"http://www.busandcoachbuyer.com/virtual-magazines/",frequency:"fortnightly",publicationDate:"Friday",expectedDate:"Friday",login:null,password:null,isActive:true},
{id:52,name:"Ileach",link:"http://www.ileach.co.uk/8hc6tk/",frequency:"fortnightly",publicationDate:"Saturday",expectedDate:"Friday",login:null,password:null,isActive:true},
{id:53,name:"Spa Business Insider",link:"https://www.spaopportunities.com/index.cfm?pagetype=archive",frequency:"fortnightly",publicationDate:null,expectedDate:"Friday",login:null,password:null,isActive:true},
{id:54,name:"Herald Your Community, The",link:"http://www.herald-publishing.co.uk/#Footer",frequency:"fortnightly",publicationDate:"Thursday",expectedDate:"Friday",login:null,password:null,isActive:true},
{id:55,name:"Warehouse & Logistics News",link:"https://warehousenews.co.uk/category/digital-editions/the-editor/",frequency:"fortnightly",publicationDate:"1st and 15th of each month",expectedDate:"Friday",login:null,password:null,isActive:true},
{id:56,name:"Music Week",link:"https://www.musicweek.com/digital-edition",frequency:"monthly",publicationDate:"1st of the month",expectedDate:1,login:null,password:null,isActive:true},
{id:57,name:"Waitrose Food",link:"https://digital.waitrosefoodmagazine.com/html5/reader/production/default.aspx?pubname=&edid=dbd4fcf8-dc6c-44d6-a095-999cac30ced8",frequency:"monthly",publicationDate:"1st of the month",expectedDate:10,login:null,password:null,isActive:true},
{id:58,name:"Railway Gazette International",link:"https://www.railwaygazette.com/magazines",frequency:"monthly",publicationDate:"1st of the month",expectedDate:15,login:null,password:null,isActive:true},
{id:59,name:"Engineer, The",link:"http://www.theengineer.co.uk",frequency:"monthly",publicationDate:"1st of the month",expectedDate:5,login:null,password:null,isActive:true},
{id:60,name:"Food & Drink Technology",link:"https://www.foodanddrinktechnology.com/issue/33046/may-2020/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:10,login:null,password:null,isActive:true},
{id:61,name:"Public Sector Catering",link:"https://www.publicsectorcatering.co.uk/magazine/archive",frequency:"monthly",publicationDate:"1st of the month",expectedDate:5,login:null,password:null,isActive:true},
{id:62,name:"Messenger, The (Manchester Law Society)",link:"https://www.manchesterlawsociety.org.uk/the-messenger-north-west-law/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:5,login:null,password:null,isActive:true},
{id:63,name:"Stir It Up",link:"https://stiritupmagazine.co.uk/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:11,login:null,password:null,isActive:true},
{id:64,name:"Fruit Grower",link:"https://thefruitgrower.co.uk/magazine-archives/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:22,login:null,password:null,isActive:true},
{id:65,name:"Comms Business",link:"https://www.commsbusiness.co.uk/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:5,login:null,password:null,isActive:true},
{id:66,name:"Bushey News",link:"https://www.mynewsmag.co.uk/magazine/mybushey/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:11,login:null,password:null,isActive:true},
{id:67,name:"Radlett News",link:"https://www.mynewsmag.co.uk/magazine/myradlett/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:11,login:null,password:null,isActive:true},
{id:68,name:"Roofing Cladding & Insulation",link:"https://rci.mydigitalpublication.co.uk/archive/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:8,login:null,password:null,isActive:true},
{id:69,name:"Bunnings Magazine",link:"https://www.bunnings.com.au/bunnings-magazine/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:11,login:null,password:null,isActive:true},
{id:70,name:"Machinery",link:"https://www.machinery.co.uk/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:11,login:null,password:null,isActive:true},
{id:71,name:"MRW - Materials Recycling World",link:"https://www.mrw.co.uk/digital-edition/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:5,login:null,password:null,isActive:true},
{id:72,name:"Pensions Age",link:"https://www.pensionsage.com/pa/pa-digital-editions.php",frequency:"monthly",publicationDate:"1st of the month",expectedDate:11,login:null,password:null,isActive:true},
{id:73,name:"Drink and Drugs News",link:"https://www.drinkanddrugsnews.com/category/magazine-archive/magazine-archive-2024/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:11,login:null,password:null,isActive:true},
{id:74,name:"Tomorrow's Cleaning",link:"http://www.tomorrowscleaning.com/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:11,login:null,password:null,isActive:true},
{id:75,name:"Glass & Glazing Products",link:"https://www.ggpmag.com/ggp-magazine",frequency:"monthly",publicationDate:"1st of the month",expectedDate:20,login:null,password:null,isActive:true},
{id:76,name:"PBW News",link:"https://www.petbusinessworld.co.uk/magazines",frequency:"monthly",publicationDate:"1st of the month",expectedDate:17,login:null,password:null,isActive:true},
{id:77,name:"NetWorking Plus",link:"https://networkingplus.co.uk/archives",frequency:"monthly",publicationDate:"1st of the month",expectedDate:30,login:null,password:null,isActive:true},
{id:78,name:"Curious (IFL Science) Magazine",link:"https://www.iflscience.com/curious-magazine",frequency:"monthly",publicationDate:"1st of the month",expectedDate:1,login:null,password:null,isActive:true},
{id:79,name:"CIBSE Journal",link:"https://www.cibsejournal.com/cibsejournal-magazine",frequency:"monthly",publicationDate:"1st of the month",expectedDate:5,login:null,password:null,isActive:true},
{id:80,name:"South East Farmer",link:"https://www.southeastfarmer.net/category/print-editions/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:4,login:null,password:null,isActive:true},
{id:81,name:"DIY Week",link:"https://www.diyweek.net/digital-editions",frequency:"monthly",publicationDate:"1st of the month",expectedDate:"5th of the following month",login:null,password:null,isActive:true},
{id:82,name:"Your Local Link",link:"https://locallinkmagazine.com/current-issues/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:19,login:null,password:null,isActive:true},
{id:83,name:"CPM - Crop Production Magazine",link:"https://www.cpm-magazine.co.uk/back-issues/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:19,login:null,password:null,isActive:true},
{id:84,name:"London Planner",link:"https://www.calameo.com/books/000387620fbf983f5dc85",frequency:"monthly",publicationDate:"1st of the month",expectedDate:1,login:null,password:null,isActive:true},
{id:85,name:"Technology Reseller",link:"https://technologyreseller.uk/read-our-latest-magazine-edition-v73-read-online-now-download-register/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:27,login:null,password:null,isActive:true},
{id:86,name:"Healthcare Markets",link:"https://www.laingbuisson.com/dashboard/downloads/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:15,login:null,password:null,isActive:true},
{id:87,name:"Route One",link:"https://www.route-one.net/latest-issue-new/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:15,login:null,password:null,isActive:true},
{id:88,name:"Tesco Magazine",link:"https://www.tesco.com/zones/tesco-magazine",frequency:"monthly",publicationDate:"1st of the month",expectedDate:1,login:null,password:null,isActive:true},
{id:89,name:"Teach Primary",link:"https://www.teachprimary.com/hot_products/view/get-your-free-download-the-new-issue-of-teach-primary",frequency:"monthly",publicationDate:"1st of the month",expectedDate:4,login:null,password:null,isActive:true},
{id:90,name:"Snack",link:"https://snackmag.co.uk/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:1,login:null,password:null,isActive:true},
{id:91,name:"Agronomist & Arable Farmer",link:"https://www.aafarmer.co.uk/magazines",frequency:"monthly",publicationDate:"1st of the month",expectedDate:7,login:null,password:null,isActive:true},
{id:92,name:"Farm Contractor & Large Scale Farmer",link:"https://fc.mydigitalpublication.co.uk/publication/?m=71415&l=1&view=issuelistBrowser",frequency:"monthly",publicationDate:"1st of the month",expectedDate:2,login:null,password:null,isActive:true},
{id:93,name:"My Chorleywood news",link:"https://www.mynewsmag.co.uk/magazine/mychorleywood/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:3,login:null,password:null,isActive:true},
{id:94,name:"Cruise Trade News",link:"https://www.cruisetradenews.com/digital-issues/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:15,login:null,password:null,isActive:true},
{id:95,name:"Mortgage Strategy",link:"https://www.mortgagestrategy.co.uk/digital-edition/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:11,login:null,password:null,isActive:true},
{id:96,name:"Building & Facilities Management",link:"https://www.bfmmagazine.co.uk/archive/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:23,login:null,password:null,isActive:true},
{id:97,name:"Bexhill News",link:"https://bexhill.news/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:10,login:null,password:null,isActive:true},
{id:98,name:"Show House",link:"https://showhousemag.mydigitalpublication.co.uk/publication/?m=62697&l=1&view=issuelistBrowser",frequency:"monthly",publicationDate:"1st of the month",expectedDate:22,login:null,password:null,isActive:true},
{id:99,name:"Designerati",link:"https://www.designerati.co.uk/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:22,login:null,password:null,isActive:true},
{id:100,name:"ASLEF Journal",link:"https://www.aslef.org.uk/locomotive-journal.html",frequency:"monthly",publicationDate:"1st of the month",expectedDate:1,login:null,password:null,isActive:true},
{id:101,name:"FoodBev",link:"https://www.foodbev.com/foodbev-magazine",frequency:"monthly",publicationDate:"1st of the month",expectedDate:10,login:null,password:null,isActive:true},
{id:102,name:"International Cranes and Specialized Transport",link:"https://www.cranebriefing.com/magazines/international-cranes-specialized-transport/latest-issue",frequency:"monthly",publicationDate:"1st of the month",expectedDate:26,login:null,password:null,isActive:true},
{id:103,name:"American Cranes & Transport",link:"https://www.cranebriefing.com/magazines/american-cranes-transport/latest-issue",frequency:"monthly",publicationDate:"1st of the month",expectedDate:28,login:null,password:null,isActive:true},
{id:104,name:"Yoga Magazine",link:"https://freemagazines.top/tag/yoga",frequency:"monthly",publicationDate:"1st of the month",expectedDate:24,login:null,password:null,isActive:true},
{id:105,name:"Infrastructure Investor",link:"https://www.infrastructureinvestor.com/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:10,login:null,password:null,isActive:true},
{id:106,name:"04:05 Global Payroll Magazine",link:"https://gpa.net/pages/0405",frequency:"monthly",publicationDate:"1st of the month",expectedDate:4,login:null,password:null,isActive:true},
{id:107,name:"Cadogan VIP",link:"https://www.cadogan.co.uk/cadogan-vip-archive/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:10,login:null,password:null,isActive:true},
{id:108,name:"Moneyfacts",link:"https://edition.pagesuite-professional.co.uk/html5/reader/production/default.aspx?pubname=&edid=46e8225c-27a3-427f-a85f-3c544be44336",frequency:"monthly",publicationDate:"1st of the month",expectedDate:1,login:null,password:null,isActive:true},
{id:109,name:"CEO Monthly",link:"https://www.ceo-review.com/latest-issues/",frequency:"monthly",publicationDate:"1st of the month",expectedDate:17,login:null,password:null,isActive:true},
{id:110,name:"Food & Drink Network UK",link:"The edition will be sent at publications@gorkana.com account",frequency:"monthly",publicationDate:"1st of the month",expectedDate:18,login:null,password:null,isActive:true},
{id:111,name:"Gosport Choice",link:"The edition will be sent at publications@gorkana.com account",frequency:"monthly",publicationDate:"1st of the month",expectedDate:18,login:null,password:null,isActive:true},
{id:112,name:"Northern Vision",link:"The edition will be sent at publications@gorkana.com account",frequency:"monthly",publicationDate:"1st of the month",expectedDate:18,login:null,password:null,isActive:true},
{id:113,name:"Rescue & Animal Care",link:"https://www.rescueandanimalcare.com/online-magazines",frequency:"monthly",publicationDate:"1st of the month",expectedDate:29,login:null,password:null,isActive:true},
{id:114,name:"Car Dealer",link:"https://issuu.com/blackballmedia/docs",frequency:"monthly",publicationDate:"1st of the month",expectedDate:22,login:null,password:null,isActive:true},
{id:115,name:"Fintech Strategy",link:"The edition will be sent at publications@gorkana.com account",frequency:"monthly",publicationDate:"1st of the month",expectedDate:28,login:null,password:null,isActive:true},
{id:116,name:"Cleaning Matters",link:"http://www.cleaning-matters.co.uk/page_243933.asp",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:9,login:null,password:null,isActive:true},
{id:117,name:"Controls, Drives & Automation",link:"https://www.controlsdrivesautomation.com/page_176049.asp",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:11,login:null,password:null,isActive:true},
{id:118,name:"Frozen & Chilled Foods",link:"https://frozenandchilledfoods.com/",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:15,login:null,password:null,isActive:true},
{id:119,name:"Health & Safety Matters",link:"https://www.hsmsearch.com/Home",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:5,login:null,password:null,isActive:true},
{id:120,name:"Public Sector Building",link:"https://www.buildingtalk.com/psb-magazine-products/",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:20,login:null,password:null,isActive:true},
{id:121,name:"Kitchen & Bath Business [KBB]",link:"https://www.kbbonline.com/contact-us",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:20,login:null,password:null,isActive:true},
{id:122,name:"Dance Europe",link:"https://danceeurope.net/",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:1,login:null,password:null,isActive:true},
{id:123,name:"Logistics Matters",link:"https://www.logisticsmatters.co.uk/Home",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:14,login:null,password:null,isActive:true},
{id:124,name:"Heavy Lift",link:"https://edition.pagesuite.com/html5/reader/production/default.aspx?pubname=&edid=e12cd88f-acd2-4d34-b005-b487847b81a1",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:10,login:null,password:null,isActive:true},
{id:125,name:"Housing Executive",link:"https://www.housingexecutive.co.uk/",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:10,login:null,password:null,isActive:true},
{id:126,name:"Disabled Motoring UK",link:"https://www.disabledmotoring.org/magazine/magazine",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:10,login:null,password:null,isActive:true},
{id:127,name:"Legal Abacus",link:"https://www.ilfm.org.uk/site/blog/legal-abacus_index.html",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:15,login:null,password:null,isActive:true},
{id:128,name:"Architecture Today",link:"https://architecturetoday.co.uk/",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:8,login:null,password:null,isActive:true},
{id:129,name:"Professional Magazine",link:"https://www.cipp.org.uk/resources/professional-magazine.html",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:26,login:null,password:null,isActive:true},
{id:130,name:"Evangelical Magazine",link:"edition will be sent at publications@gorkana.com account",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:17,login:null,password:null,isActive:true},
{id:131,name:"Private Debt Investor",link:"https://www.privatedebtinvestor.com/download-the-july-august-2025-issue-of-private-debt-investor/",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:4,login:null,password:null,isActive:true},
{id:132,name:"International Construction",link:"https://www.constructionbriefing.com/magazines/international-construction/latest-issue",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:11,login:null,password:null,isActive:true},
{id:133,name:"Access International",link:"https://www.accessbriefing.com/magazines/access-international/latest-issue",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:9,login:null,password:null,isActive:true},
{id:134,name:"Engineering & Technology",link:"https://eandt.theiet.org/issues",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:5,login:null,password:null,isActive:true},
{id:135,name:"Glossy",link:"https://theglossymagazine.com/online-edition/",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:20,login:null,password:null,isActive:true},
{id:136,name:"ACR Journal",link:"https://www.acrjournal.uk/information/digital-archive",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:22,login:null,password:null,isActive:true},
{id:137,name:"Dog Friendly",link:"https://book662277.publuu.com/",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:22,login:null,password:null,isActive:true},
{id:138,name:"Tyne Valley Express",link:"Current Magazine – Tyne Valley Express Magazine",frequency:"bi-monthly",publicationDate:"1st of the bi-monthly period",expectedDate:22,login:null,password:null,isActive:true},
{id:139,name:"National Health Executive",link:"https://mag.nationalhealthexecutive.com/publication/?view=issuelistBrowser&l=1&m=62920",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:9,login:null,password:null,isActive:true},
{id:140,name:"Public Sector Executive",link:"https://mag.publicsectorexecutive.com/publication/?m=62919&l=1&view=issuelistBrowser",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:18,login:null,password:null,isActive:true},
{id:141,name:"ADS Advance",link:"https://www.adsadvance.co.uk/publications/",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:13,login:null,password:null,isActive:true},
{id:142,name:"Customer focus",link:"https://www.instituteofcustomerservice.com/",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:15,login:null,password:null,isActive:true},
{id:143,name:"Fire safety matters",link:"https://www.fsmatters.com/Home",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:23,login:null,password:null,isActive:true},
{id:144,name:"in Focus LDT",link:"https://www.learningdisabilitytoday.co.uk/digital-issue/",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:20,login:null,password:null,isActive:true},
{id:145,name:"Golf News",link:"https://golfnews.co.uk/",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:10,login:null,password:null,isActive:true},
{id:146,name:"Direct Driller",link:"https://directdriller.com/",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:14,login:null,password:null,isActive:true},
{id:147,name:"Heating & Plumbing Monthly",link:"https://hpm.mydigitalpublication.co.uk/archive/",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:18,login:null,password:null,isActive:true},
{id:148,name:"Refreshment",link:"https://www.refreshmentmag.com/magazine",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:5,login:null,password:null,isActive:true},
{id:149,name:"Demolition & Recycling International",link:"https://www.demolitionandrecycling.media/magazine/issue-archive",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:28,login:null,password:null,isActive:true},
{id:150,name:"Diesel Progress International",link:"https://www.powerprogress.com/magazines/power-progress-international/latest-issue",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:15,login:null,password:null,isActive:true},
{id:151,name:"Retail Beauty",link:"https://retailbeauty.com.au/magazine/",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:15,login:null,password:null,isActive:true},
{id:152,name:"Government & Public Sector Journal",link:"https://www.gpsj.co.uk/",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:28,login:null,password:null,isActive:true},
{id:153,name:"The Bite Magazine",link:"https://www.thebitemag.com/the-bite-magazine-archive/",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:25,login:null,password:null,isActive:true},
{id:154,name:"XU magazine",link:"https://xumagazine.com/issues",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:16,login:null,password:null,isActive:true},
{id:155,name:"Power and Energy Solutions (Wind)",link:"https://pes.eu.com/in-print/",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:23,login:null,password:null,isActive:true},
{id:156,name:"Automotive Business Magazine",link:"https://businessmotoring.co.uk/",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:27,login:null,password:null,isActive:true},
{id:157,name:"Britbuild",link:"https://www.britbuild-magazine.co.uk/magazines/",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:28,login:null,password:null,isActive:true},
{id:158,name:"i4.0 Today",link:"https://www.i40today.com/magazine/",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:28,login:null,password:null,isActive:true},
{id:159,name:"Foundation Magazine",link:"https://www.johnlewis.com/content/foundation-magazine",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:28,login:null,password:null,isActive:true},
{id:160,name:"Supplychain Strategy",link:"https://supplychainstrategy.media/supplychain-strategy-publications/",frequency:"quarterly",publicationDate:"1st of the quarter",expectedDate:28,login:null,password:null,isActive:true},
];

/* ============================================================
   STORAGE
   ============================================================ */
// Bump this whenever SEED_PUBLICATIONS is replaced with a new master list —
// it makes every browser that already has older data reset to the new one
// automatically on next load, instead of silently keeping the old list.
// v2: Oct 2026 — replaced the 84 sample publications with the real title
// list from Publications.xlsx, and added the separate Expected Date field.
// v3: fixed a parsing bug where the Weekly sheet's column-header row
// ("Publication"/"Link"/"Day") was incorrectly imported as a 161st
// publication — corrected list has 160 real titles.
const SEED_VERSION = 'v3-2026-10-uk-publications-fixed';

const State = { publications: [], logs: [], notes: [], ready: false };

function camelPublication(r) {
  return { id:r.id, name:r.name, link:r.link, frequency:r.frequency, publicationDate:r.publication_date ?? null,
    expectedDate:(r.expected_date != null && /^\\d+$/.test(String(r.expected_date))) ? Number(r.expected_date) : (r.expected_date ?? null),
    login:r.login, password:r.password, isActive:Boolean(r.is_active), deletedAt:r.deleted_at ?? null,
    createdAt:r.created_at ?? null, updatedAt:r.updated_at ?? null };
}
function camelLog(r) { return { id:r.id, publicationId:r.publication_id, logDate:r.log_date, downloaded:r.downloaded, timeDownloaded:r.time_downloaded ?? null, reasonWhenNo:r.reason_when_no ?? null, createdAt:r.created_at ?? '' }; }
function camelNote(r) { return { id:r.id, publicationId:r.publication_id, entryDate:r.entry_date, noteDate:r.note_date ?? null, comment:r.comment, createdAt:r.created_at ?? '' }; }

const API = {
  async request(url, options={}) {
    const res = await fetch(url, { ...options, headers:{'Content-Type':'application/json', ...(options.headers||{})} });
    let data; try { data = await res.json(); } catch { throw new Error(`API returned ${res.status}`); }
    if (!res.ok || data.ok === false) throw new Error(data.error || data.message || `Request failed (${res.status})`);
    return data;
  },
  async loadAll() {
    const [p,l,n] = await Promise.all([this.request('/api/publications'), this.request('/api/logs'), this.request('/api/notes')]);
    State.publications=(p.publications||[]).map(camelPublication); State.logs=(l.logs||[]).map(camelLog); State.notes=(n.notes||[]).map(camelNote); State.ready=true;
  },
  createPublication:x=>API.request('/api/publications',{method:'POST',body:JSON.stringify(x)}),
  updatePublication:(id,x)=>API.request(`/api/publications/${id}`,{method:'PUT',body:JSON.stringify(x)}),
  archivePublication:id=>API.request(`/api/publications/${id}`,{method:'DELETE'}),
  restorePublication:id=>API.request(`/api/publications/${id}/restore`,{method:'POST'}),
  permanentDeletePublication:id=>API.request(`/api/publications/${id}/permanent`,{method:'DELETE'}),
  upsertLog:x=>API.request('/api/logs',{method:'POST',body:JSON.stringify(x)}),
  deleteLog:(publicationId,logDate)=>API.request(`/api/logs/by-publication/${publicationId}/${logDate}`,{method:'DELETE'}),
  createNote:x=>API.request('/api/notes',{method:'POST',body:JSON.stringify(x)}),
  deleteNote:id=>API.request(`/api/notes/${id}`,{method:'DELETE'}),
  restoreBackup:x=>API.request('/api/backup',{method:'PUT',body:JSON.stringify(x)}),
  seed:x=>API.request('/api/seed',{method:'POST',body:JSON.stringify({publications:x})})
};
const DB = { getPublications:()=>State.publications, getLogs:()=>State.logs, getNotes:()=>State.notes };
async function reloadSharedData(render=true) { await API.loadAll(); if(render){ renderRail(); renderPage(); updateProgress(); } }
async function seedIfEmpty() {
  if(State.publications.length) return;
  await API.seed(SEED_PUBLICATIONS.map(p=>({id:p.id,name:p.name,link:p.link,frequency:p.frequency,publication_date:p.publicationDate,expected_date:p.expectedDate,login:p.login,password:p.password,is_active:p.isActive?1:0})));
  await API.loadAll();
}

function safe(fn, fallback) { try { return fn(); } catch(e) { console.error(e); return fallback; } }

/* ============================================================
   DATE HELPERS
   ============================================================ */
function todayStr() { return fmtDate(new Date()); }
function fmtDate(d) { return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function parseDate(s) { const [y,m,d] = s.split('-').map(Number); return new Date(y, m-1, d); }
function addDays(d, n) { const r = new Date(d); r.setDate(r.getDate()+n); return r; }
function startOfWeekMon(d) { const r = new Date(d); const dow = (d.getDay()+6)%7; r.setDate(d.getDate()-dow); return r; }
function startOfMonth(d) { return new Date(d.getFullYear(), d.getMonth(), 1); }
function endOfMonth(d) { return new Date(d.getFullYear(), d.getMonth()+1, 0); }
function datesInRange(startS, endS) { const dates = []; let cur = parseDate(startS); const end = parseDate(endS); while (cur <= end) { dates.push(fmtDate(cur)); cur = addDays(cur, 1); } return dates; }
function fmtDisplay(dateStr) { return parseDate(dateStr).toLocaleDateString('en-GB', {day:'numeric',month:'long',year:'numeric'}); }
function fmtShort(dateStr) { return parseDate(dateStr).toLocaleDateString('en-GB', {day:'2-digit',month:'short',year:'numeric'}); }

/* ============================================================
   SCHEDULING (core logic, unchanged from the original engine)
   ============================================================ */
const DAY_MAP = {sunday:0,monday:1,tuesday:2,wednesday:3,thursday:4,friday:5,saturday:6};
const NATURAL_FREQS = new Set(['monthly','bi-monthly','quarterly','annual']);
const FREQ_ORDER = ['daily','weekly','fortnightly','monthly','bi-monthly','quarterly','annual'];

function isDueOnDate(freq, publicationDate, dateStr) {
  const d = parseDate(dateStr);
  const dow = d.getDay(), dom = d.getDate(), month = d.getMonth();
  switch(freq) {
    case 'daily': return dow >= 1 && dow <= 5;
    case 'weekly': {
      if (!publicationDate) return dow === 1;
      const ed = DAY_MAP[publicationDate.trim().toLowerCase()];
      return dow === (ed === undefined ? 1 : ed);
    }
    case 'fortnightly': {
      if (publicationDate && publicationDate.includes('1st and 15th')) return dom === 1 || dom === 15;
      if (publicationDate && publicationDate.includes('15th & 30th')) return dom === 15 || dom === 30;
      if (!publicationDate) return dow === 5;
      const ed = DAY_MAP[publicationDate.trim().toLowerCase()];
      return dow === (ed === undefined ? 5 : ed);
    }
    case 'monthly': {
      const day = clampDayOfMonth(publicationDate, d);
      return dom === day;
    }
    case 'bi-monthly': {
      if (month % 2 !== 0) return false;
      const day = clampDayOfMonth(publicationDate, d);
      return dom === day;
    }
    case 'quarterly': {
      if (![0,3,6,9].includes(month)) return false;
      const day = clampDayOfMonth(publicationDate, d);
      return dom === day;
    }
    case 'annual': return dom === 1 && month === 0;
    default: return false;
  }
}
// For Monthly/Bi-Monthly/Quarterly, the "due" trigger is the publication's
// Expected Date day-of-month (passed in as a number via schedulingValue()),
// clamped to however many days that month actually has. Falls back to the
// 1st when no clean day number is available (e.g. an irregular free-text
// Expected Date like "5th of the following month").
function clampDayOfMonth(dayNum, dateInMonth) {
  if (typeof dayNum !== 'number' || dayNum < 1) return 1;
  return Math.min(dayNum, endOfMonth(dateInMonth).getDate());
}
// What to pass as isDueOnDate's/getDueDateInCurrentPeriod's "publicationDate"
// argument for a given publication: for Monthly/Bi-Monthly/Quarterly this is
// now the Expected Date day number (the actual scheduling driver); for every
// other frequency it's unchanged — the existing Publication Date rule.
function schedulingValue(pub) {
  if (NATURAL_FREQS.has(pub.frequency)) return typeof pub.expectedDate === 'number' ? pub.expectedDate : null;
  return pub.publicationDate;
}
function getNaturalPeriod(freq, dueDateStr) {
  const d = parseDate(dueDateStr);
  switch(freq) {
    case 'daily': return {start:dueDateStr, end:dueDateStr};
    case 'weekly': { const s = startOfWeekMon(d); return {start:fmtDate(s), end:fmtDate(addDays(s,6))}; }
    case 'fortnightly': {
      const dom = d.getDate();
      if (dom <= 15) return {start:fmtDate(startOfMonth(d)), end:fmtDate(new Date(d.getFullYear(),d.getMonth(),15))};
      return {start:fmtDate(new Date(d.getFullYear(),d.getMonth(),16)), end:fmtDate(endOfMonth(d))};
    }
    case 'monthly': return {start:fmtDate(startOfMonth(d)), end:fmtDate(endOfMonth(d))};
    case 'bi-monthly': { const pm = d.getMonth()%2===0 ? d.getMonth() : d.getMonth()-1; return {start:fmtDate(new Date(d.getFullYear(),pm,1)), end:fmtDate(endOfMonth(new Date(d.getFullYear(),pm+1,1)))}; }
    case 'quarterly': { const qm = Math.floor(d.getMonth()/3)*3; return {start:fmtDate(new Date(d.getFullYear(),qm,1)), end:fmtDate(endOfMonth(new Date(d.getFullYear(),qm+2,1)))}; }
    case 'annual': return {start:`${d.getFullYear()}-01-01`, end:`${d.getFullYear()}-12-31`};
    default: return {start:dueDateStr, end:dueDateStr};
  }
}
// Resolves a publication's scheduling rule (e.g. "Monday", "1st and 15th of
// each month", "1st of the month") to the actual calendar date of its
// current cycle — the most recent matching date up to and including
// refDateStr, falling back to the next upcoming one if none are found
// looking back. Daily has no single date, since it recurs every weekday.
function resolvePublicationDate(pub, refDateStr) {
  refDateStr = refDateStr || todayStr();
  if (pub.frequency === 'daily') return 'Every day';
  const ref = parseDate(refDateStr);
  for (let i = 0; i <= 40; i++) {
    const ds = fmtDate(addDays(ref, -i));
    if (isDueOnDate(pub.frequency, pub.publicationDate, ds)) return fmtDisplay(ds);
  }
  for (let i = 1; i <= 40; i++) {
    const ds = fmtDate(addDays(ref, i));
    if (isDueOnDate(pub.frequency, pub.publicationDate, ds)) return fmtDisplay(ds);
  }
  return '—';
}

function parseExpectedDateInput(raw) {
  if (!raw) return null;
  return /^\d+$/.test(raw) ? parseInt(raw, 10) : raw;   // plain number -> day-of-month; anything else -> kept as text
}

// "Expected Date" is informational only — it does NOT drive the checklist
// (Publication Date does that, unchanged). It resolves a stored value to a
// real calendar date for monthly/bi-monthly/quarterly titles, combining the
// day-of-month figure from the publications list with whichever month the
// current cycle falls in — e.g. day 2 becomes "2 October 2026" this month,
// and will read "2 November 2026" next month.
function resolveExpectedDate(pub, refDateStr) {
  refDateStr = refDateStr || todayStr();
  const freq = pub.frequency, ed = pub.expectedDate;
  if (freq === 'daily') return 'Every day';
  if (freq === 'weekly') return ed || '—';
  if (freq === 'fortnightly') return ed || 'Friday';
  if (NATURAL_FREQS.has(freq)) {
    if (ed === null || ed === undefined || ed === '') return '—';
    if (typeof ed === 'number') {
      const period = getNaturalPeriod(freq, refDateStr);
      const base = parseDate(period.start);
      const daysInMonth = endOfMonth(base).getDate();
      const day = Math.min(ed, daysInMonth);
      const resolved = new Date(base.getFullYear(), base.getMonth(), day);
      return fmtDisplay(fmtDate(resolved));
    }
    return String(ed);               // irregular free-text value — show as-is
  }
  return ed ? String(ed) : '—';
}

function getDueDateInCurrentPeriod(freq, publicationDate, todayDateStr) {
  const period = getNaturalPeriod(freq, todayDateStr);
  for (const d of datesInRange(period.start, todayDateStr)) if (isDueOnDate(freq, publicationDate, d)) return d;
  return null;
}

/* ============================================================
   LOG + NOTE HELPERS
   ============================================================ */
function getLogsForPubInPeriod(pubId, start, end) { return DB.getLogs().filter(l => l.publicationId === pubId && l.logDate >= start && l.logDate <= end); }
async function upsertLog(pubId, logDate, downloaded, timeDownloaded, reasonWhenNo) {
  await API.upsertLog({publication_id:pubId,log_date:logDate,downloaded,time_downloaded:timeDownloaded||null,reason_when_no:reasonWhenNo||null});
  await API.loadAll();
  return State.logs.find(l=>l.publicationId===pubId && l.logDate===logDate) || null;
}
async function deleteLog(pubId, logDate) { await API.deleteLog(pubId,logDate); await API.loadAll(); }

function nowTime() { const n = new Date(); return `${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}`; }
function getNotesForEntry(pubId, entryDate) { return DB.getNotes().filter(n => n.publicationId===pubId && n.entryDate===entryDate).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)); }
async function addNote(pubId, entryDate, comment) { await API.createNote({publication_id:pubId,entry_date:entryDate,note_date:todayStr(),comment}); await API.loadAll(); }
async function deleteNoteRec(id) { await API.deleteNote(id); await API.loadAll(); }
function getMostRecentNote(pubId, entryDate) { const n = getNotesForEntry(pubId, entryDate); return n.length ? n[0] : null; }

/* ============================================================
   CHECKLIST BUILD
   ============================================================ */
function buildChecklist(dateStr) {
  const pubs = DB.getPublications().filter(p => p.isActive && !p.deletedAt);
  const items = [];
  for (const pub of pubs) {
    const freq = pub.frequency;
    if (NATURAL_FREQS.has(freq)) {
      const dueDateInPeriod = getDueDateInCurrentPeriod(freq, schedulingValue(pub), dateStr);
      if (!dueDateInPeriod) continue;
      const period = getNaturalPeriod(freq, dueDateInPeriod);
      const periodLogs = getLogsForPubInPeriod(pub.id, period.start, period.end);
      if (periodLogs.find(l => l.downloaded === 'Y')) continue;
      const log = periodLogs.sort((a,b)=>b.logDate.localeCompare(a.logDate))[0] || null;
      items.push({pub, logDate: dateStr, dueDateInPeriod, log});
    } else {
      if (!isDueOnDate(freq, pub.publicationDate, dateStr)) continue;
      const log = DB.getLogs().find(l => l.publicationId===pub.id && l.logDate===dateStr) || null;
      items.push({pub, logDate: dateStr, dueDateInPeriod: null, log});
    }
  }
  items.sort((a,b) => { const fd = FREQ_ORDER.indexOf(a.pub.frequency)-FREQ_ORDER.indexOf(b.pub.frequency); return fd!==0 ? fd : a.pub.name.localeCompare(b.pub.name); });
  return items;
}

/* ============================================================
   SHARED UI BITS
   ============================================================ */
function esc(str) { if (!str) return ''; return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function pillHtml(freq) { return `<span class="pill pill-${freq}">${freq}</span>`; }
function statusHtml(log, overdue) {
  if (!log) return overdue ? `<span class="status status-o">Overdue</span>` : `<span class="status status-p">Pending</span>`;
  if (log.downloaded === 'Y') return `<span class="status status-y">Downloaded${log.timeDownloaded?' · '+log.timeDownloaded:''}</span>`;
  if (log.downloaded === 'W') return `<span class="status status-w">Awaiting</span>`;
  return `<span class="status status-n">Not downloaded</span>`;
}
function statCard(label, value, colorVar) {
  return `<div class="panel stat"><p class="l">${label}</p><p class="v" style="color:var(${colorVar});">${value}</p></div>`;
}
function credCell(password, uid) {
  if (!password) return `<span class="muted">—</span>`;
  const dots = '•'.repeat(Math.min(password.length, 8));
  return `<span id="${uid}" data-pwd="${esc(password)}" data-vis="0" style="display:inline-flex;align-items:center;gap:0.3rem;">
    <span class="pwd-text mono" style="font-size:0.75rem;color:var(--ink-soft);">${dots}</span>
    <button class="icon-btn" onclick="togglePwd('${uid}')" title="Show / hide">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/><circle cx="12" cy="12" r="3"/></svg>
    </button>
  </span>`;
}
function togglePwd(id) {
  const el = document.getElementById(id); if (!el) return;
  el.dataset.vis = el.dataset.vis === '1' ? '0' : '1';
  const pwd = el.dataset.pwd || '';
  el.querySelector('.pwd-text').textContent = el.dataset.vis === '1' ? pwd : '•'.repeat(Math.min(pwd.length,8));
}
function closeModal() { document.getElementById('modal-root').innerHTML = ''; }
function linkHtml(link) {
  if (!link) return `<span class="muted">—</span>`;
  return link.startsWith('http')
    ? `<a href="${esc(link)}" target="_blank" rel="noopener" style="color:var(--accent-ink);font-size:0.78rem;text-decoration:none;">Open ↗</a>`
    : `<span class="muted" style="font-size:0.78rem;">${esc(link)}</span>`;
}

/* ============================================================
   RAIL / PROGRESS
   ============================================================ */
const NAV_ITEMS = [
  {id:'checklist', label:"Checklist", icon:`<path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>`},
  {id:'timeliness', label:'Timeliness', icon:`<path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>`},
  {id:'publications', label:'Publications', icon:`<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.25v13m0-13C10.83 5.48 9.25 5 7.5 5S4.17 5.48 3 6.25v13C4.17 18.48 5.75 18 7.5 18s3.33.48 4.5 1.25m0-13c1.17-.77 2.75-1.25 4.5-1.25s4.33.48 4.5 1.25v13c-1.17-.77-2.75-1.25-4.5-1.25s-3.33.48-4.5 1.25"/>`},
  {id:'logs', label:'Logs & export', icon:`<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>`},
];
function renderRail() {
  const today = todayStr();
  const dueToday = safe(()=>buildChecklist(today).length, 0);
  document.getElementById('rail-nav').innerHTML = NAV_ITEMS.map(n => `
    <div class="rail-link ${currentPage===n.id?'active':''}" onclick="navigate('${n.id}')">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${n.icon}</svg>
      ${n.label}
      ${n.id==='checklist' && dueToday>0 ? `<span class="count">${dueToday}</span>` : ''}
    </div>`).join('');
}
function updateProgress() {
  const today = todayStr();
  const pubs = DB.getPublications().filter(p => p.isActive && !p.deletedAt);
  let totalDue=0, downloaded=0;
  for (const p of pubs) {
    if (NATURAL_FREQS.has(p.frequency)) {
      const dd = getDueDateInCurrentPeriod(p.frequency, schedulingValue(p), today);
      if (dd !== today) continue;   // only count what's actually due today — overdue carry-forward items are excluded
      totalDue++;
      const per = getNaturalPeriod(p.frequency, dd);
      if (getLogsForPubInPeriod(p.id, per.start, per.end).some(l=>l.downloaded==='Y')) downloaded++;
    } else {
      if (!isDueOnDate(p.frequency, p.publicationDate, today)) continue;
      totalDue++;
      if (DB.getLogs().find(l=>l.publicationId===p.id && l.logDate===today && l.downloaded==='Y')) downloaded++;
    }
  }
  const pct = totalDue>0 ? Math.round(downloaded/totalDue*100) : 0;
  document.getElementById('foot-progress').textContent = `${downloaded} / ${totalDue}`;
  document.getElementById('foot-bar').style.width = pct+'%';
}

/* ============================================================
   ROUTER
   ============================================================ */
let currentPage = 'checklist';
function navigate(page) {
  currentPage = page;
  document.getElementById('rail').classList.remove('open');
  renderRail();
  renderPage();
  updateProgress();
  window.scrollTo(0,0);
}
function renderPage() {
  const el = document.getElementById('page');
  el.className = 'page-enter';
  switch(currentPage) {
    case 'checklist': el.innerHTML = renderChecklist(); break;
    case 'timeliness': el.innerHTML = renderTimeliness(); bindTimeliness(); break;
    case 'publications': el.innerHTML = renderPublications(); break;
    case 'logs': el.innerHTML = renderLogs(); break;
  }
}

/* ============================================================
   PAGE: CHECKLIST
   ============================================================ */
const NO_REASONS = ['Publisher/Website issue','Subscription expired','No new edition','Missed','WAD down','Arrived late in mailbox','Published late on website','Other'];
let _checklistDate = '';
let _checklistView = 'due'; // due | overdue | all
function getChecklistDate() { return _checklistDate || todayStr(); }
function checklistNavDate(delta) {
  const next = addDays(parseDate(getChecklistDate()), delta);
  if (fmtDate(next) > todayStr()) return;
  _checklistDate = fmtDate(next);
  renderPage();
}
function checklistSetDate(val) { if (val > todayStr()) return; _checklistDate = val; renderPage(); }
function setChecklistView(v) { _checklistView = v; renderPage(); }

function renderChecklist() {
  const viewDate = getChecklistDate();
  const today = todayStr();
  const isToday = viewDate === today;
  const items = buildChecklist(viewDate);

  const dueItems = items.filter(i => !i.dueDateInPeriod || i.dueDateInPeriod === viewDate || i.log?.downloaded === 'W');
  const overdueItems = items.filter(i => i.dueDateInPeriod && i.dueDateInPeriod !== viewDate && i.log?.downloaded !== 'W');

  const countDoneNatural = DB.getPublications().filter(p => p.isActive && !p.deletedAt && NATURAL_FREQS.has(p.frequency) && (() => {
    const dd = getDueDateInCurrentPeriod(p.frequency, schedulingValue(p), viewDate);
    if (!dd) return false;
    const per = getNaturalPeriod(p.frequency, dd);
    return getLogsForPubInPeriod(p.id, per.start, per.end).some(l => l.downloaded==='Y');
  })()).length;

  const downloaded = dueItems.filter(i=>i.log?.downloaded==='Y').length + countDoneNatural;
  const total = dueItems.length + countDoneNatural;
  const missed = dueItems.filter(i=>i.log?.downloaded==='N').length;
  const pending = dueItems.filter(i=>!i.log).length;
  const awaiting = dueItems.filter(i=>i.log?.downloaded==='W').length;

  const pendingDailyIds = isToday ? dueItems.filter(i=>i.pub.frequency==='daily' && !i.log).map(i=>i.pub.id) : [];

  let list, emptyLabel;
  if (_checklistView === 'overdue') { list = overdueItems; emptyLabel = 'Nothing overdue — the current period is clear.'; }
  else if (_checklistView === 'all') { list = [...dueItems, ...overdueItems]; emptyLabel = 'No active publications match this date.'; }
  else { list = dueItems; emptyLabel = 'No publications expected on this date.'; }

  const rows = list.map(item => renderChecklistRow(item, viewDate, overdueItems.includes(item))).join('');

  return `
  <div class="hd">
    <div>
      <h1>Checklist</h1>
      <p class="sub">${isToday ? "Managing downloads for today" : 'Viewing'} — ${fmtDisplay(viewDate)}</p>
    </div>
    <div style="display:flex;align-items:center;gap:0.45rem;">
      <button class="btn btn-outline btn-sm" onclick="checklistNavDate(-1)">‹</button>
      <input type="date" class="field" style="width:auto;padding:0.4rem 0.6rem;" value="${viewDate}" max="${today}" onchange="checklistSetDate(this.value)">
      <button class="btn btn-outline btn-sm" onclick="checklistNavDate(1)" ${isToday?'disabled':''}>›</button>
      ${!isToday ? `<button class="btn btn-outline btn-sm" onclick="_checklistDate='';renderPage()">Today</button>` : ''}
    </div>
  </div>

  ${!isToday ? `<div class="banner banner-amber" style="margin-bottom:1rem;">Viewing a past date — marks you save here log against <strong>${fmtDisplay(viewDate)}</strong>.</div>` : ''}
  ${pendingDailyIds.length ? `<div class="banner banner-accent" style="margin-bottom:1rem;">
      <span><strong>${pendingDailyIds.length}</strong> daily publication${pendingDailyIds.length!==1?'s':''} still pending today</span>
      <button class="btn btn-accent btn-sm" onclick="markAllDaily()">Mark all daily as downloaded</button>
    </div>` : ''}

  <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0.85rem;margin-bottom:1.4rem;">
    ${statCard('Expected', total, '--ink')}
    ${statCard('Downloaded', downloaded, '--accent')}
    ${statCard('Pending', pending+awaiting, '--amber')}
    ${statCard('Missed', missed, '--red')}
  </div>

  <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.9rem;">
    <div class="seg">
      <button class="${_checklistView==='due'?'active':''}" onclick="setChecklistView('due')">Due (${dueItems.length})</button>
      <button class="${_checklistView==='overdue'?'active':''}" onclick="setChecklistView('overdue')">Overdue (${overdueItems.length})</button>
      <button class="${_checklistView==='all'?'active':''}" onclick="setChecklistView('all')">All active</button>
    </div>
  </div>

  <div class="panel twrap">
    <table>
      <thead><tr>
        <th class="th">Publication</th><th class="th">Frequency</th><th class="th">Publication Date</th>
        <th class="th">Status</th><th class="th">Link</th><th class="th">Credentials</th>
        <th class="th">Notes</th><th class="th" style="text-align:right;">Action</th>
      </tr></thead>
      <tbody>${rows || `<tr><td class="td empty" colspan="8">${emptyLabel}</td></tr>`}</tbody>
    </table>
  </div>`;
}

function renderChecklistRow(item, viewDate, isOverdue) {
  const {pub, log, dueDateInPeriod} = item;
  const entryDate = dueDateInPeriod || viewDate;
  const isMissed = log?.downloaded==='N', isDownloaded = log?.downloaded==='Y', isAwaiting = log?.downloaded==='W', isPending = !log;

  let actions = '';
  if (isPending) {
    actions = `<button class="btn btn-accent btn-sm" onclick="markLog(${pub.id},'Y','${viewDate}',null)">Mark yes</button>
      <button class="btn btn-danger btn-sm" onclick="openReasonModal(${pub.id},'${viewDate}','${jsEsc(pub.name)}')">Mark no</button>
      ${isOverdue ? `<button class="btn btn-outline btn-sm" onclick="markLog(${pub.id},'W','${viewDate}',null)">Awaiting</button>` : ''}`;
  } else if (isMissed) {
    actions = `<button class="btn btn-accent btn-sm" onclick="markLog(${pub.id},'Y','${viewDate}',null)">Arrived late ✓</button>
      <button class="btn btn-ghost btn-sm" onclick="openReasonModal(${pub.id},'${viewDate}','${jsEsc(pub.name)}')">Edit reason</button>`;
  } else if (isDownloaded) {
    actions = `<button class="btn btn-ghost btn-sm" onclick="undoLog(${pub.id},'${viewDate}')">Undo</button>`;
  } else if (isAwaiting) {
    actions = `<button class="btn btn-accent btn-sm" onclick="markLog(${pub.id},'Y','${viewDate}',null)">Mark arrived</button>
      <button class="btn btn-ghost btn-sm" onclick="undoLog(${pub.id},'${viewDate}')">Undo</button>`;
  }

  const expected = dueDateInPeriod
    ? `<span style="font-size:0.78rem;color:${isOverdue?'var(--red)':'var(--ink-soft)'};">${fmtShort(dueDateInPeriod)}${isOverdue?' ⏰':''}</span>`
    : `<span style="font-size:0.78rem;color:var(--ink-soft);">${fmtShort(viewDate)}</span>`;

  const recentNote = getMostRecentNote(pub.id, entryDate);
  const notesCount = getNotesForEntry(pub.id, entryDate).length;
  const notesCell = recentNote
    ? `<button onclick="openNotesModal(${pub.id},'${entryDate}','${jsEsc(pub.name)}')" style="all:unset;cursor:pointer;font-size:0.78rem;color:var(--ink-soft);max-width:11rem;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(recentNote.comment)}${notesCount>1?` <span class="muted">(+${notesCount-1})</span>`:''}</button>`
    : `<button onclick="openNotesModal(${pub.id},'${entryDate}','${jsEsc(pub.name)}')" style="all:unset;cursor:pointer;font-size:0.78rem;color:var(--ink-faint);">+ Add</button>`;

  return `<tr>
    <td class="td"><div style="font-weight:500;">${esc(pub.name)}</div></td>
    <td class="td">${pillHtml(pub.frequency)}</td>
    <td class="td">${expected}</td>
    <td class="td">${statusHtml(log, isOverdue)}</td>
    <td class="td">${linkHtml(pub.link)}</td>
    <td class="td">${pub.login ? `<div style="font-size:0.75rem;color:var(--ink-soft);margin-bottom:0.15rem;">${esc(pub.login)}</div>` : ''}${credCell(pub.password, 'pwd-cl-'+pub.id+'-'+entryDate)}</td>
    <td class="td">${notesCell}</td>
    <td class="td" style="text-align:right;"><div style="display:flex;justify-content:flex-end;gap:0.3rem;flex-wrap:wrap;">${actions}</div></td>
  </tr>`;
}

function jsEsc(s) { return esc(s).replace(/'/g, "\\'"); }
async function markAllDaily() { const viewDate=getChecklistDate(), items=buildChecklist(viewDate).filter(i=>i.pub.frequency==='daily'&&!i.log), time=nowTime(); for(const item of items) await upsertLog(item.pub.id,viewDate,'Y',time,null); updateProgress(); renderPage(); }
async function markLog(pubId,downloaded,logDate,reason){ await upsertLog(pubId,logDate,downloaded,downloaded==='Y'?nowTime():null,reason); updateProgress(); renderPage(); }
async function undoLog(pubId,logDate){ await deleteLog(pubId,logDate); updateProgress(); renderPage(); }

/* ---- Mark-No reason modal ---- */
function openReasonModal(pubId, logDate, pubName) {
  const opts = NO_REASONS.map(r => `<option value="${esc(r)}">${esc(r)}</option>`).join('');
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal">
        <div class="modal-hd"><h3>Mark not downloaded</h3><button class="icon-btn" onclick="closeModal()">✕</button></div>
        <div style="padding:1.1rem 1.25rem;">
          <p class="sub" style="margin:0 0 0.9rem;font-size:0.82rem;">${pubName} — ${fmtDisplay(logDate)}</p>
          <label class="flabel">Reason</label>
          <select id="reason-preset" class="field" style="margin-bottom:0.7rem;" onchange="document.getElementById('reason-custom').style.display=this.value==='Other'?'block':'none'">
            <option value="">Select a reason…</option>${opts}
          </select>
          <div id="reason-custom" style="display:none;">
            <label class="flabel">Details</label>
            <input id="reason-text" class="field" placeholder="Type the reason…">
          </div>
        </div>
        <div class="modal-ft">
          <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
          <button class="btn btn-primary" onclick="submitReason(${pubId},'${logDate}')">Save</button>
        </div>
      </div>
    </div>`;
}
async function submitReason(pubId, logDate) {
  const preset = document.getElementById('reason-preset')?.value;
  const custom = document.getElementById('reason-text')?.value;
  const reason = (preset && preset !== 'Other') ? preset : (custom || 'Not available');
  await markLog(pubId, 'N', logDate, reason);
  closeModal();
}

/* ---- Notes modal ---- */
let _notesModal = null, _notesShowInput = false;
function openNotesModal(pubId, entryDate, pubName) { _notesModal = {pubId, entryDate, pubName}; _notesShowInput = false; renderNotesModal(); }
function renderNotesModal() {
  if (!_notesModal) return;
  const {pubId, entryDate, pubName} = _notesModal;
  const notes = getNotesForEntry(pubId, entryDate);
  const notesHtml = notes.length === 0
    ? `<tr><td class="td empty" colspan="2">No comments yet</td></tr>`
    : notes.map(n => `<tr>
        <td class="td"><div style="font-size:0.85rem;">${esc(n.comment)}</div><div class="muted" style="font-size:0.72rem;margin-top:0.15rem;">${fmtDisplay(n.noteDate||n.entryDate)}</div></td>
        <td class="td" style="text-align:right;"><button class="icon-btn" onclick="deleteNoteAndRefresh(${n.id})" title="Delete">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button></td></tr>`).join('');
  const inputHtml = _notesShowInput ? `
    <div style="padding:0.8rem 1.25rem;border-top:1px solid var(--rule);">
      <textarea id="note-textarea" class="field" rows="3" placeholder="Type your note…" style="margin-bottom:0.6rem;"></textarea>
      <div style="display:flex;gap:0.5rem;justify-content:flex-end;">
        <button class="btn btn-outline btn-sm" onclick="_notesShowInput=false;renderNotesModal()">Cancel</button>
        <button class="btn btn-primary btn-sm" onclick="saveNewNote()">Save note</button>
      </div>
    </div>` : '';
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-overlay" onclick="if(event.target===this)closeNotesModal()">
      <div class="modal">
        <div class="modal-hd"><div><h3>Notes</h3><p class="sub" style="font-size:0.78rem;margin:0.15rem 0 0;">${esc(pubName)} — ${fmtDisplay(entryDate)}</p></div><button class="icon-btn" onclick="closeNotesModal()">✕</button></div>
        <div style="max-height:16rem;overflow-y:auto;"><table><tbody>${notesHtml}</tbody></table></div>
        ${inputHtml}
        <div class="modal-ft" style="justify-content:space-between;">
          <button class="btn btn-primary btn-sm" onclick="_notesShowInput=true;renderNotesModal()">Add note</button>
          <button class="btn btn-outline btn-sm" onclick="closeNotesModal()">Close</button>
        </div>
      </div>
    </div>`;
  if (_notesShowInput) document.getElementById('note-textarea')?.focus();
}
async function saveNewNote() {
  const ta = document.getElementById('note-textarea'); const text = ta ? ta.value.trim() : '';
  if (!text) return;
  await addNote(_notesModal.pubId, _notesModal.entryDate, text);
  _notesShowInput = false; renderNotesModal(); renderPage();
}
async function deleteNoteAndRefresh(id) { if (!confirm('Delete this note?')) return; await deleteNoteRec(id); renderNotesModal(); renderPage(); }
function closeNotesModal() { _notesModal = null; _notesShowInput = false; document.getElementById('modal-root').innerHTML = ''; }

/* ============================================================
   PAGE: TIMELINESS
   ============================================================ */
function buildTimeliness(startS, endS, groupBy) {
  const pubs = DB.getPublications().filter(p => p.isActive && !p.deletedAt);
  const logs = DB.getLogs();
  const logsByPub = new Map();
  for (const l of logs) { if (!logsByPub.has(l.publicationId)) logsByPub.set(l.publicationId, []); logsByPub.get(l.publicationId).push(l); }
  const dates = datesInRange(startS, endS);
  const counted = new Set(); const map = new Map();
  const getPeriodKey = ds => groupBy==='day' ? ds : groupBy==='week' ? fmtDate(startOfWeekMon(parseDate(ds))) : ds.slice(0,7);
  for (const ds of dates) {
    for (const pub of pubs) {
      if (!isDueOnDate(pub.frequency, schedulingValue(pub), ds)) continue;
      const freq = pub.frequency, pk = getPeriodKey(ds), key = `${freq}::${pk}`;
      let entry = map.get(key) || {downloaded:0, expected:0};
      const np = getNaturalPeriod(freq, ds);
      if (NATURAL_FREQS.has(freq)) {
        const dk = `${pub.id}::${np.start}::${pk}`;
        if (counted.has(dk)) { map.set(key, entry); continue; }
        counted.add(dk);
      }
      entry.expected++;
      const pubLogs = logsByPub.get(pub.id) || [];
      if (pubLogs.some(l => l.downloaded==='Y' && l.logDate>=np.start && l.logDate<=np.end)) entry.downloaded++;
      map.set(key, entry);
    }
  }
  const rows = [];
  for (const [key, val] of map.entries()) { const [freq, period] = key.split('::'); rows.push({period, frequency:freq, downloaded:val.downloaded, expected:val.expected, percentage: val.expected>0 ? Math.round(val.downloaded/val.expected*100):0}); }
  return rows.sort((a,b)=> a.period<b.period?-1:1);
}
function renderTimeliness() {
  const today = todayStr(); const monthStart = fmtDate(startOfMonth(parseDate(today)));
  const activePubs = DB.getPublications().filter(p=>p.isActive && !p.deletedAt);
  const activeFreqs = FREQ_ORDER.filter(f => f!=='annual' && activePubs.some(p=>p.frequency===f));
  return `
  <div class="hd"><div><h1>Timeliness Report</h1><p class="sub">How promptly downloads arrived, for the dates below</p></div></div>
  <div class="panel" style="padding:1.15rem;margin-bottom:1.4rem;">
    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:0.7rem;margin-bottom:1.1rem;">
      <label class="flabel" style="margin:0;">From</label><input type="date" id="t-start" class="field" style="width:auto;" value="${monthStart}" onchange="refreshTimeliness()">
      <label class="flabel" style="margin:0;">To</label><input type="date" id="t-end" class="field" style="width:auto;" value="${today}" onchange="refreshTimeliness()">
      <label class="flabel" style="margin:0;">Frequency</label>
      <select id="t-freq" class="field" style="width:auto;" onchange="refreshTimeliness()">
        <option value="all">All (combined total)</option>
        ${activeFreqs.map(f=>`<option value="${f}">${f.charAt(0).toUpperCase()+f.slice(1)} only</option>`).join('')}
      </select>
      <div class="seg" style="margin-left:auto;">
        <button id="gb-day" onclick="setGroupBy('day')">Day</button>
        <button id="gb-week" class="active" onclick="setGroupBy('week')">Week</button>
        <button id="gb-month" onclick="setGroupBy('month')">Month</button>
      </div>
    </div>
    <canvas id="timeliness-chart" height="190"></canvas>
  </div>
  <p class="flabel" style="margin:0 0 0.6rem;">Breakdown by frequency, for the same dates above</p>
  <div id="freq-cards" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(10.5rem,1fr));gap:0.7rem;margin-bottom:1.4rem;"></div>
  <div class="panel twrap">
    <table>
      <thead><tr><th class="th">Period</th><th class="th" style="text-align:right;">Downloaded</th><th class="th" style="text-align:right;">Expected</th><th class="th" style="text-align:right;">Timeliness</th></tr></thead>
      <tbody id="timeliness-tbody"></tbody>
    </table>
  </div>`;
}
let _groupBy = 'week', timelinessChart = null;
function setGroupBy(g) { _groupBy = g; ['day','week','month'].forEach(x=>{ const b=document.getElementById('gb-'+x); if(b) b.className = x===g?'active':''; }); refreshTimeliness(); }
function bindTimeliness() { refreshTimeliness(); }

function timelinessCard(label, pillFreq, downloaded, expected) {
  const pct = expected > 0 ? Math.round(downloaded / expected * 100) : null;
  const cv = pct === null ? '--ink-faint' : pct>=90 ? '--accent' : pct>=70 ? '--amber' : '--red';
  return `<div class="panel stat">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;">
      ${pillFreq ? pillHtml(pillFreq) : `<span style="font-weight:600;font-size:0.85rem;">${label}</span>`}
      <span style="font-weight:700;font-size:0.95rem;color:var(${cv});">${pct===null ? '—' : pct+'%'}</span>
    </div>
    <div style="height:0.35rem;background:var(--rule);border-radius:999px;overflow:hidden;margin-bottom:0.45rem;">
      <div style="height:100%;width:${pct||0}%;background:var(${cv});"></div>
    </div>
    <div class="muted" style="font-size:0.72rem;">${pct===null ? 'Not due in this range' : `${downloaded} of ${expected} downloaded on time`}</div>
  </div>`;
}

function refreshTimeliness() {
  const startS = document.getElementById('t-start')?.value, endS = document.getElementById('t-end')?.value;
  const freqSel = document.getElementById('t-freq')?.value || 'all';
  if (!startS || !endS) return;

  const rowsAll = buildTimeliness(startS, endS, _groupBy);

  // ---- cards: per-frequency breakdown, same date range as everything else on this page ----
  const freqMap = new Map();
  for (const r of rowsAll) { const cur = freqMap.get(r.frequency) || {downloaded:0,expected:0}; cur.downloaded += r.downloaded; cur.expected += r.expected; freqMap.set(r.frequency, cur); }
  const activeFreqs = FREQ_ORDER.filter(f => f!=='annual' && freqMap.has(f));
  let overallDl = 0, overallEx = 0;
  activeFreqs.forEach(f => { const d = freqMap.get(f); overallDl += d.downloaded; overallEx += d.expected; });
  const cardsEl = document.getElementById('freq-cards');
  if (cardsEl) {
    cardsEl.innerHTML = timelinessCard('Overall', null, overallDl, overallEx)
      + activeFreqs.map(f => { const d = freqMap.get(f); return timelinessCard(null, f, d.downloaded, d.expected); }).join('');
  }

  // ---- table + chart: one combined total per period, unless a single frequency is selected above ----
  const rows = freqSel === 'all' ? rowsAll : rowsAll.filter(r => r.frequency === freqSel);
  const periodSet = [...new Set(rows.map(r=>r.period))].sort();
  const totals = periodSet.map(p => {
    const pr = rows.filter(r=>r.period===p);
    const dl = pr.reduce((s,r)=>s+r.downloaded,0), ex = pr.reduce((s,r)=>s+r.expected,0);
    return { dl, ex, pct: ex>0 ? Math.round(dl/ex*100) : 0 };
  });

  const ctx = document.getElementById('timeliness-chart')?.getContext('2d');
  if (ctx && typeof Chart !== 'undefined') {
    if (timelinessChart) timelinessChart.destroy();
    const inkSoft = getComputedStyle(document.body).getPropertyValue('--ink-soft').trim();
    timelinessChart = new Chart(ctx, { type:'bar', data:{ labels:periodSet, datasets:[
      {label:'Expected', data: totals.map(x=>x.ex), backgroundColor:'rgba(138,147,163,0.35)', borderRadius:3},
      {label:'Downloaded', data: totals.map(x=>x.dl), backgroundColor:'#0F6B5C', borderRadius:3},
    ]}, options:{ responsive:true, plugins:{legend:{position:'bottom', labels:{color:inkSoft}}}, scales:{ x:{ticks:{color:inkSoft}}, y:{beginAtZero:true, ticks:{color:inkSoft}} } } });
  }

  const tbody = document.getElementById('timeliness-tbody'); if (!tbody) return;
  if (!periodSet.length) { tbody.innerHTML = `<tr><td class="td empty" colspan="4">No data for this period.</td></tr>`; return; }
  tbody.innerHTML = periodSet.map((p, i) => { const t = totals[i]; const cv = t.pct>=90?'--accent':t.pct>=70?'--amber':'--red';
    return `<tr><td class="td mono" style="font-size:0.78rem;">${p}</td>
      <td class="td" style="text-align:right;font-weight:500;">${t.dl}</td><td class="td" style="text-align:right;color:var(--ink-soft);">${t.ex}</td>
      <td class="td" style="text-align:right;font-weight:700;color:var(${cv});">${t.pct}%</td></tr>`; }).join('');
}

/* ============================================================
   PAGE: PUBLICATIONS
   ============================================================ */
let _pubFilter='all', _pubSearch='', _pubTab='active';
function setPubTab(t){_pubTab=t;renderPage();}
function setPubFilter(f){_pubFilter=f;renderPage();}
function setPubSearch(v){_pubSearch=v; const active=document.activeElement; const el=document.getElementById('page'); el.innerHTML = renderPublications(); const inp=document.querySelector('.pub-search'); if(inp){inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length);} }

function renderPublications() {
  const allPubs = DB.getPublications();
  const activePubs = allPubs.filter(p=>!p.deletedAt);
  const archivedPubs = allPubs.filter(p=>!!p.deletedAt);
  const freqCounts = {}; activePubs.forEach(p=>freqCounts[p.frequency]=(freqCounts[p.frequency]||0)+1);
  const freqs = FREQ_ORDER.filter(f=>f!=='annual');

  const tabs = `<div class="seg" style="margin-bottom:1rem;">
    <button class="${_pubTab==='active'?'active':''}" onclick="setPubTab('active')">Active (${activePubs.length})</button>
    <button class="${_pubTab==='archived'?'active':''}" onclick="setPubTab('archived')">Archived${archivedPubs.length?` (${archivedPubs.length})`:''}</button>
  </div>`;

  const header = `<div class="hd"><div><h1>Publications</h1><p class="sub">Manage tracked titles, schedules and access details</p></div>
    <button class="btn btn-primary" onclick="openPubModal(null)">+ Add publication</button></div>`;

  if (_pubTab === 'archived') {
    const q = _pubSearch.toLowerCase();
    const filtered = archivedPubs.filter(p=>!q || p.name.toLowerCase().includes(q));
    const rows = filtered.map(pub => {
      const on = pub.deletedAt ? new Date(pub.deletedAt).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}) : '—';
      return `<tr><td class="td"><div style="font-weight:500;">${esc(pub.name)}</div></td><td class="td">${pillHtml(pub.frequency)}</td><td class="td" style="color:var(--ink-soft);font-size:0.82rem;">${on}</td>
        <td class="td" style="text-align:right;"><button class="btn btn-outline btn-sm" onclick="restorePub(${pub.id})">Restore</button>
        <button class="btn btn-danger btn-sm" onclick="permanentDeletePub(${pub.id})">Delete forever</button></td></tr>`;
    }).join('');
    return `${header}${tabs}
      <div class="banner banner-amber" style="margin-bottom:1rem;">Archived titles aren't tracked on the checklist. Restore to bring one back, or delete forever to remove it and its history permanently.</div>
      <div class="panel twrap">
        <div style="padding:0.8rem 1.1rem;border-bottom:1px solid var(--rule);display:flex;align-items:center;gap:0.7rem;">
          <input class="field pub-search" style="max-width:18rem;" placeholder="Search archived…" value="${esc(_pubSearch)}" oninput="setPubSearch(this.value)">
          <span class="muted" style="font-size:0.82rem;margin-left:auto;">${filtered.length} archived</span>
        </div>
        <table><thead><tr><th class="th">Name</th><th class="th">Frequency</th><th class="th">Archived on</th><th class="th" style="text-align:right;">Actions</th></tr></thead>
        <tbody>${rows || `<tr><td class="td empty" colspan="4">No archived publications.</td></tr>`}</tbody></table>
      </div>`;
  }

  let filtered = activePubs.filter(p => (_pubFilter==='all' || p.frequency===_pubFilter) && (!_pubSearch || p.name.toLowerCase().includes(_pubSearch.toLowerCase())));
  const chips = `<button class="pill" style="cursor:pointer;border:1px solid var(--rule-strong);${_pubFilter==='all'?'background:var(--ink);color:var(--paper-raised);':'background:var(--paper-raised);color:var(--ink-soft);'}" onclick="setPubFilter('all')">All (${activePubs.length})</button>
    ${freqs.map(f => freqCounts[f] ? `<button class="pill pill-${f}" style="cursor:pointer;${_pubFilter===f?'outline:2px solid var(--ink);outline-offset:1px;':''}" onclick="setPubFilter('${f}')">${f} (${freqCounts[f]})</button>` : '').join('')}`;

  const rows = filtered.map(pub => `<tr style="${!pub.isActive?'opacity:0.5;':''}">
    <td class="td"><div style="font-weight:500;">${esc(pub.name)}</div>${pub.login?`<div class="muted" style="font-size:0.74rem;">${esc(pub.login)}</div>`:''}</td>
    <td class="td">${pillHtml(pub.frequency)}</td>
    <td class="td muted" style="font-size:0.78rem;">${resolvePublicationDate(pub)}</td>
    <td class="td muted" style="font-size:0.78rem;">${resolveExpectedDate(pub)}</td>
    <td class="td">${linkHtml(pub.link)}</td>
    <td class="td">${credCell(pub.password, 'pwd-pub-'+pub.id)}</td>
    <td class="td">${pub.isActive ? `<span class="status status-y">Active</span>` : `<span class="status status-p">Inactive</span>`}</td>
    <td class="td" style="text-align:right;">
      <button class="icon-btn" onclick="openPubModal(${pub.id})" title="Edit"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828z"/></svg></button>
      <button class="icon-btn" onclick="archivePub(${pub.id})" title="Archive" style="margin-left:0.3rem;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 01-2-2V5a1 1 0 011-1h16a1 1 0 011 1v1a2 2 0 01-2 2M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8M10 12h4"/></svg></button>
    </td></tr>`).join('');

  return `${header}${tabs}
    <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:1rem;">${chips}</div>
    <div class="panel twrap">
      <div style="padding:0.8rem 1.1rem;border-bottom:1px solid var(--rule);display:flex;align-items:center;gap:0.7rem;">
        <input class="field pub-search" style="max-width:18rem;" placeholder="Search publications…" value="${esc(_pubSearch)}" oninput="setPubSearch(this.value)">
        <span class="muted" style="font-size:0.82rem;margin-left:auto;">${filtered.length} shown</span>
      </div>
      <table><thead><tr><th class="th">Name</th><th class="th">Frequency</th><th class="th">Publication Date</th><th class="th">Expected Date</th><th class="th">Link</th><th class="th">Credentials</th><th class="th">Status</th><th class="th" style="text-align:right;">Actions</th></tr></thead>
      <tbody>${rows || `<tr><td class="td empty" colspan="8">No publications match your filters.</td></tr>`}</tbody></table>
    </div>`;
}

function openPubModal(pubId) {
  const pubs = DB.getPublications();
  const pub = pubId ? pubs.find(p=>p.id===pubId) : null;
  const p = pub || {name:'',link:'',frequency:'weekly',publicationDate:'',expectedDate:'',login:'',password:'',isActive:true};
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-overlay" onclick="if(event.target===this)closeModal()">
      <div class="modal modal-wide">
        <div class="modal-hd"><h3>${pub ? 'Edit publication' : 'Add publication'}</h3><button class="icon-btn" onclick="closeModal()">✕</button></div>
        <div style="padding:1.1rem 1.25rem;display:grid;grid-template-columns:1fr 1fr;gap:0.9rem;">
          <div style="grid-column:1/-1;"><label class="flabel">Name</label><input id="pf-name" class="field" value="${esc(p.name)}"></div>
          <div style="grid-column:1/-1;"><label class="flabel">Link / delivery note</label><input id="pf-link" class="field" value="${esc(p.link||'')}" placeholder="https://… or how it arrives"></div>
          <div><label class="flabel">Frequency</label>
            <select id="pf-freq" class="field">${FREQ_ORDER.filter(f=>f!=='annual').map(f=>`<option value="${f}" ${p.frequency===f?'selected':''}>${f}</option>`).join('')}</select>
          </div>
          <div><label class="flabel">Publication Date</label><input id="pf-pubdate" class="field" value="${esc(p.publicationDate||'')}" placeholder="e.g. Monday, or 1st of the month"></div>
          <div><label class="flabel">Expected Date</label><input id="pf-expdate" class="field" value="${esc(p.expectedDate!=null?String(p.expectedDate):'')}" placeholder="e.g. 2 (day of month), or Monday"></div>
          <div><label class="flabel">Login</label><input id="pf-login" class="field" value="${esc(p.login||'')}"></div>
          <div><label class="flabel">Password</label><input id="pf-pwd" class="field" value="${esc(p.password||'')}"></div>
          <div style="grid-column:1/-1;display:flex;align-items:center;gap:0.5rem;">
            <input type="checkbox" id="pf-active" ${p.isActive?'checked':''} style="width:auto;">
            <label for="pf-active" style="font-size:0.85rem;">Active (tracked on the checklist)</label>
          </div>
        </div>
        <div class="modal-ft">
          <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
          <button class="btn btn-primary" onclick="savePub(${pubId||'null'})">Save</button>
        </div>
      </div>
    </div>`;
}
async function savePub(pubId) {
  const name=document.getElementById('pf-name').value.trim(); if(!name){alert('Name is required.');return;}
  const payload={name,link:document.getElementById('pf-link').value.trim()||null,frequency:document.getElementById('pf-freq').value,
    publication_date:document.getElementById('pf-pubdate').value.trim()||null,expected_date:parseExpectedDateInput(document.getElementById('pf-expdate').value.trim()),
    login:document.getElementById('pf-login').value.trim()||null,password:document.getElementById('pf-pwd').value.trim()||null,is_active:document.getElementById('pf-active').checked?1:0};
  try{ if(pubId) await API.updatePublication(pubId,payload); else await API.createPublication(payload); await API.loadAll(); closeModal(); renderPage(); renderRail(); updateProgress(); }catch(e){alert('Could not save publication: '+e.message);}
}
async function archivePub(pubId){ try{await API.archivePublication(pubId);await API.loadAll();_pubTab='archived';renderPage();renderRail();updateProgress();}catch(e){alert('Could not archive: '+e.message);} }
async function restorePub(pubId){ try{await API.restorePublication(pubId);await API.loadAll();renderPage();renderRail();updateProgress();}catch(e){alert('Could not restore: '+e.message);} }
async function permanentDeletePub(pubId){ if(!confirm('Permanently delete this publication and all its logs? This cannot be undone.'))return; try{await API.permanentDeletePublication(pubId);await API.loadAll();renderPage();renderRail();updateProgress();}catch(e){alert('Could not delete: '+e.message);} }


/* ============================================================
   PAGE: LOGS
   ============================================================ */
let _logStart='', _logEnd='', _logPubId='all', _logStatus='all';
function renderLogs() {
  const today = todayStr();
  if (!_logStart) _logStart = fmtDate(addDays(parseDate(today), -6));
  if (!_logEnd) _logEnd = today;
  const pubs = DB.getPublications(); const pubMap = new Map(pubs.map(p=>[p.id,p]));
  let logs = DB.getLogs().filter(l => l.logDate>=_logStart && l.logDate<=_logEnd);
  if (_logPubId!=='all') logs = logs.filter(l=>l.publicationId===parseInt(_logPubId));
  if (_logStatus!=='all') logs = logs.filter(l=>l.downloaded===_logStatus);
  logs.sort((a,b)=> b.logDate.localeCompare(a.logDate) || b.createdAt.localeCompare(a.createdAt));
  const pubOptions = pubs.filter(p=>!p.deletedAt).map(p=>`<option value="${p.id}" ${_logPubId==p.id?'selected':''}>${esc(p.name)}</option>`).join('');

  const rows = logs.map(log => { const pub = pubMap.get(log.publicationId);
    const badge = log.downloaded==='Y' ? `<span class="status status-y">Downloaded</span>` : log.downloaded==='W' ? `<span class="status status-w">Awaiting</span>` : `<span class="status status-n">Not downloaded</span>`;
    return `<tr><td class="td mono" style="font-size:0.78rem;">${log.logDate}</td>
      <td class="td" style="font-weight:500;max-width:16rem;"><div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(pub?.name || '#'+log.publicationId)}</div></td>
      <td class="td">${pub ? pillHtml(pub.frequency) : '—'}</td><td class="td">${badge}</td>
      <td class="td muted" style="font-size:0.78rem;">${log.timeDownloaded||'—'}</td>
      <td class="td muted" style="font-size:0.78rem;max-width:14rem;"><div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(log.reasonWhenNo||'')||'—'}</div></td></tr>`;
  }).join('');

  return `
  <div class="hd"><div><h1>Logs & export</h1><p class="sub">Full history of download entries</p></div>
    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
      <button class="btn btn-outline" onclick="exportFullReportCSV()">⬇ Full report CSV</button>
      <button class="btn btn-outline" onclick="exportLoggedCSV()">⬇ Logged entries CSV</button>
      <button class="btn btn-outline" onclick="exportBackupJSON()">⬇ Backup (JSON)</button>
      <label class="btn btn-outline" style="margin:0;">⬆ Restore backup<input type="file" accept="application/json" style="display:none;" onchange="importBackupJSON(this.files[0])"></label>
    </div>
  </div>
  <div class="panel" style="padding:0.9rem 1.1rem;margin-bottom:1rem;">
    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:0.65rem;">
      <label class="flabel" style="margin:0;">From</label><input type="date" class="field" style="width:auto;" value="${_logStart}" onchange="_logStart=this.value;renderPage()">
      <label class="flabel" style="margin:0;">To</label><input type="date" class="field" style="width:auto;" value="${_logEnd}" onchange="_logEnd=this.value;renderPage()">
      <select class="field" style="width:auto;" onchange="_logPubId=this.value;renderPage()"><option value="all">All publications</option>${pubOptions}</select>
      <select class="field" style="width:auto;" onchange="_logStatus=this.value;renderPage()">
        <option value="all" ${_logStatus==='all'?'selected':''}>All status</option>
        <option value="Y" ${_logStatus==='Y'?'selected':''}>Downloaded</option>
        <option value="N" ${_logStatus==='N'?'selected':''}>Not downloaded</option>
        <option value="W" ${_logStatus==='W'?'selected':''}>Awaiting</option>
      </select>
      <span class="muted" style="font-size:0.82rem;margin-left:auto;">${logs.length} entr${logs.length!==1?'ies':'y'}</span>
    </div>
  </div>
  <div class="panel twrap">
    <table><thead><tr><th class="th">Date</th><th class="th">Publication</th><th class="th">Frequency</th><th class="th">Status</th><th class="th">Time</th><th class="th">Reason</th></tr></thead>
    <tbody>${rows || `<tr><td class="td empty" colspan="6">No log entries found.</td></tr>`}</tbody></table>
  </div>`;
}
function exportLoggedCSV() {
  const pubs = DB.getPublications(); const pubMap = new Map(pubs.map(p=>[p.id,p]));
  let logs = DB.getLogs().filter(l=>l.logDate>=_logStart && l.logDate<=_logEnd);
  if (_logPubId!=='all') logs = logs.filter(l=>l.publicationId===parseInt(_logPubId));
  if (_logStatus!=='all') logs = logs.filter(l=>l.downloaded===_logStatus);
  if (!logs.length) { alert('No logs to export.'); return; }
  const rows = [['Date','Publication','Frequency','Status','Time Downloaded','Reason'], ...logs.map(l => { const pub = pubMap.get(l.publicationId);
    const status = l.downloaded==='Y'?'Downloaded':l.downloaded==='W'?'Awaiting':'Not Downloaded';
    return [l.logDate, pub?.name||'', pub?.frequency||'', status, l.timeDownloaded||'', l.reasonWhenNo||'']; })];
  downloadCSV(rows, `download-logs_${_logStart}_to_${_logEnd}.csv`);
}
function exportFullReportCSV() {
  const allPubs = DB.getPublications().filter(p=>p.isActive && !p.deletedAt);
  if (!_logStart || !_logEnd) { alert('Please set a date range first.'); return; }
  const dates = datesInRange(_logStart, _logEnd);
  const reportRows = [['Date','Publication','Frequency','Publication Date','Expected Date','Status','Time Downloaded','Reason']];
  const seenNatural = new Set();
  for (const ds of dates) {
    for (const pub of allPubs) {
      const freq = pub.frequency; let dueDate = null;
      if (NATURAL_FREQS.has(freq)) {
        const dd = getDueDateInCurrentPeriod(freq, schedulingValue(pub), ds); if (!dd) continue;
        const key = `${pub.id}::${dd}`; if (seenNatural.has(key)) continue; seenNatural.add(key); dueDate = dd;
      } else { if (!isDueOnDate(freq, pub.publicationDate, ds)) continue; dueDate = ds; }
      const period = getNaturalPeriod(freq, dueDate);
      const periodLogs = getLogsForPubInPeriod(pub.id, period.start, period.end);
      const yLog = periodLogs.find(l=>l.downloaded==='Y'), nLog = periodLogs.find(l=>l.downloaded==='N'), wLog = periodLogs.find(l=>l.downloaded==='W');
      let status='Pending', time='', reason='';
      if (yLog) { status='Downloaded'; time=yLog.timeDownloaded||''; } else if (nLog) { status='Not Downloaded'; reason=nLog.reasonWhenNo||''; } else if (wLog) { status='Awaiting'; }
      reportRows.push([dueDate, pub.name, freq, pub.publicationDate||'', resolveExpectedDate(pub, dueDate), status, time, reason]);
    }
  }
  if (reportRows.length<=1) { alert('No data to export.'); return; }
  downloadCSV(reportRows, `full-report_${_logStart}_to_${_logEnd}.csv`);
}
function downloadCSV(rows, filename) {
  const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename; a.click();
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}
function exportBackupJSON() {
  const payload = { exportedAt: new Date().toISOString(), publications: DB.getPublications(), logs: DB.getLogs(), notes: DB.getNotes() };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = `desk-backup_${todayStr()}.json`; a.click();
  setTimeout(()=>URL.revokeObjectURL(url), 1000);
}
function importBackupJSON(file) {
  if(!file)return; const reader=new FileReader();
  reader.onload=async()=>{ try{const data=JSON.parse(reader.result); if(!data.publications||!data.logs)throw new Error('Invalid backup file'); if(!confirm('This will replace all current shared data with the backup. Continue?'))return; await API.restoreBackup(data); await reloadSharedData(); alert('Backup restored.');}catch(e){alert('Could not restore this backup: '+e.message);} }; reader.readAsText(file);
}

/* ============================================================
   INIT
   ============================================================ */
window.addEventListener('DOMContentLoaded', async () => {
  try {
    document.getElementById('page').innerHTML = '<div class="panel" style="max-width:34rem;margin:3rem auto;padding:1.5rem;"><h2 style="margin:0 0 .5rem;">Loading shared data…</h2><p class="muted" style="margin:0;">Connecting to the Cloudflare D1 database.</p></div>';
    await API.loadAll();
    await seedIfEmpty();
    navigate('checklist');
    setInterval(async()=>{ try{await API.loadAll(); if(!document.getElementById('modal-root')?.children.length){renderRail();renderPage();updateProgress();}}catch(e){console.error('Background refresh failed',e);} },10000);
  } catch(e) {
    console.error(e);
    document.getElementById('page').innerHTML = `<div class="panel" style="max-width:34rem;margin:3rem auto;padding:1.5rem;"><h2 style="margin:0 0 .5rem;">Unable to load shared data</h2><p style="color:var(--ink-soft);font-size:.9rem;margin:0;">${esc(e.message)}. Check the /api routes and the DB binding, then reload the page.</p></div>`;
  }
});
