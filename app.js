const companies = [
  {
    name: "Brain Station 23 PLC",
    location: "8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka",
    website: "brainstation-23.com",
    career: "brainstation-23.easy.jobs",
    email: "career@brainstation-23.com",
    linkedin: "linkedin.com/company/brainstation-23; linkedin.com/showcase/brain-station-23-careers-and-culture",
    contact: null
  },
  {
    name: "BJIT Limited",
    location: "H-2275, Satarkul, Badda, Dhaka",
    website: "bjitgroup.com",
    career: "bjitgroup.com/career",
    email: "career@bjitgroup.com",
    linkedin: "linkedin.com/company/bjit",
    contact: null
  },
  {
    name: "Vivasoft Limited",
    location: "Ahmed Tower (Levels 11, 16, 19), Banani, Dhaka",
    website: "vivasoftltd.com",
    career: "vivasoftltd.com/career",
    email: "contact@vivasoftltd.com",
    linkedin: "linkedin.com/company/vivasoftltd",
    contact: null
  },
  {
    name: "Enosis Solutions",
    location: "House 27, Road 8, Gulshan, Dhaka",
    website: "enosisbd.com",
    career: "enosisbd.pinpointhq.com",
    email: "info@enosisbd.com",
    linkedin: "linkedin.com/company/enosis-solutions",
    contact: null
  },
  {
    name: "Kaz Software Limited",
    location: "35/5 Shantinagar, Dhaka",
    website: "kaz.com.bd",
    career: "kaz.com.bd/company/career",
    email: "info@kaz.com.bd",
    linkedin: "linkedin.com/company/kaz-software-limited",
    contact: null
  },
  {
    name: "TigerIT Bangladesh Ltd.",
    location: "Mirpur DOHS Cultural Center (Level 2), Road 9, Mirpur DOHS, Dhaka",
    website: "tigerit.com",
    career: null,
    email: "careers@tigerit.com",
    linkedin: "linkedin.com/company/tigerit-bangladesh-limited",
    contact: null
  },
  {
    name: "DataSoft Systems (BD)",
    location: "Rupayan Shelford (Level 20), Mirpur Road, Dhaka",
    website: "datasoft-bd.com",
    career: "datasoft-bd.com/career/",
    email: "career@datasoft-bd.com",
    linkedin: "linkedin.com/company/datasoft-systems-bangladesh-limited",
    contact: null
  },
  {
    name: "Cefalo Bangladesh Ltd.",
    location: "House 26, Road 5, Dhanmondi, Dhaka",
    website: "cefalo.com/en/",
    career: "cefalo.com/en/career",
    email: "mail@cefalo.com",
    linkedin: "linkedin.com/company/cefalo-as; linkedin.com/showcase/cefalobangladesh",
    contact: null
  },
  {
    name: "Therap (BD) Ltd.",
    location: "House 47, Road 4, Block C, Banani, Dhaka",
    website: "therapbd.com",
    career: "therap.hire.trakstar.com",
    email: "info@therapbd.com",
    linkedin: "linkedin.com/company/therapbd",
    contact: null
  },
  {
    name: "REVE Systems",
    location: "Purbachal Express Highway, Dumni, Khilkhet, Dhaka",
    website: "revesoft.com",
    career: "revesoft.com/career",
    email: "info@revesoft.com",
    linkedin: "linkedin.com/company/reve-systems",
    contact: null
  },
  {
    name: "LeadSoft Bangladesh",
    location: "LEADS Tower, M-20,Main Road 1, Section 14, Mirpur, Dhaka",
    website: "leads.com.bd",
    career: "leads.com.bd/current-vacancies",
    email: "info@leads-bd.com",
    linkedin: "linkedin.com/company/leads-corporation-limited",
    contact: null
  },
  {
    name: "Mediasoft Data Systems Limited",
    location: "BDBL Bhaban, Level-5, 12, Kazi Nazrul Islam Avenue, Karwan Bazar, Dhaka",
    website: "mediasoftbd.com",
    career: "career.mediasoftbd.com",
    email: " enquiry@mediasoftbd.com",
    linkedin: "linkedin.com/company/mediasoftbd",
    contact: null
  },
  {
    name: "Southtech Group",
    location: "Hazi Komar Uddin Tower, 3rd Floor – West Side, 27, Ashkona, Dakshinkhan, Dhaka",
    website: "southtechgroup.com",
    career: "career.southtechgroup.com",
    email: "info@southtechgroup.com",
    linkedin: "linkedin.com/company/southtechgroup",
    contact: null
  },
  {
    name: "Riseup Labs",
    location: "Floor 3, Natore Tower, Service Road, Sector 3, Uttara, Dhaka",
    website: "riseuplabs.com",
    career: "riseuplabs.com/career",
    email: "contact@riseuplabs.com",
    linkedin: "linkedin.com/company/riseuplabs; linkedin.com/showcase/career-at-riseuplabs/",
    contact: null
  },
  {
    name: "Bdtask Limited",
    location: "B-25, Mannan Plaza, Khilkhet, Dhaka",
    website: "bdtask.com",
    career: "bdtask.com/career",
    email: "hr@bdtask.com",
    linkedin: "linkedin.com/company/bdtask",
    contact: null
  },
  {
    name: "Dynamic Solution Innovators",
    location: "House 177, Lane 2, New DOHS, Mohakhali, Dhaka",
    website: "dsinnovators.com",
    career: "app.hrythmic.com/recruit/openings/company/dsinnovators/",
    email: "info@dsinnovators.com",
    linkedin: "linkedin.com/company/dsinnovators",
    contact: null
  },
  {
    name: "Kona Software Lab",
    location: "Police Plaza Concord (Tower: A), Level: 8, Road: 144, Gulshan-1, Dhaka",
    website: "konasl.com",
    career: "konasl.com/careers",
    email: null,
    linkedin: "linkedin.com/company/konasl",
    contact: null
  },
  {
    name: "ShopUp",
    location: "429–432, Tejgaon I/A, Dhaka",
    website: "shopup.org",
    career: "shopup.org/career",
    email: "hello@shopup.org",
    linkedin: "linkedin.com/company/shopfront-limited",
    contact: null
  },
  {
    name: "Pathao",
    location: "Baro Bhuiyan Genetic Plaza, House# CWN (A) 3A, Lift- 7, Road# 49, Kemal Ataturk Avenue, Gulshan Model Town, Dhaka",
    website: "pathao.com",
    career: "careers.pathao.com",
    email: "support@pathao.com",
    linkedin: "linkedin.com/company/pathao",
    contact: null
  },
  {
    name: "bKash Limited",
    location: "Shadhinata Tower, 1,Bir Sreshtha Shaheed Jahangir Gate,Dhaka",
    website: "bkash.com",
    career: "bkash.com/career; facebook.com/bkashcareer",
    email: "support@bkash.com",
    linkedin: "linkedin.com/company/bkash-limited/",
    contact: null
  },
  {
    name: "Chaldal",
    location: "Dhaka",
    website: "chaldal.com",
    career: "chaldal.tech",
    email: 'support@chaldal.com',
    linkedin: "linkedin.com/company/chaldalcom",
    contact: null
  },
  {
    name: "Samsung R&D (SRBD)",
    location: "111 Bir Uttam CR Dutta Rd, Dhaka",
    website: "research.samsung.com/srbd",
    career: "research.samsung.com/careers",
    email: "recruitment.srbd@samsung.com",
    linkedin: "linkedin.com/company/samsungsrbd",
    contact: null
  },
  {
    name: "AppsCode Ltd.",
    location: "House 4, Rd No. 10, Sec 10, Uttara Dhaka 1230",
    website: "appscode.com",
    career: null,
    email: "support@appscode.com",
    linkedin: "linkedin.com/company/appscode",
    contact: null
  },
  {
    name: "Selise Digital Platform",
    location: "Secure Link Services BD Ltd. Midas Center, H-05, R-16 (New) Dhanmondi,",
    website: "selisegroup.com",
    career: "selisegroup.com/about-us/#selise-career",
    email: "support@selisegroup.com",
    linkedin: "linkedin.com/company/selise",
    contact: null
  },
  {
    name: "Nagorik Technologies",
    location: "House 1263, Road 10, Avenue 2, Mirpur DOHS, Dhaka",
    website: "nagorik.tech",
    career: "nagorik.tech/career",
    email: null,
    linkedin: "linkedin.com/company/nagorik-technologies-ltd/",
    contact: null
  },
  {
    name: "Craftsmen Software",
    location: "1st Floor, House 272, Lane 3 Eastern Rd, Dhaka",
    website: "craftsmensoftware.com",
    career: "careers.craftsmensoftware.com",
    email: "info@craftsmensoftware.com",
    linkedin: "linkedin.com/company/craftsmensoftware",
    contact: null
  },
  {
    name: "iFarmer",
    location: "House NE (B) 3B, Road - 74 Gulshan-2, Dhaka",
    website: "ifarmer.asia",
    career: "ifarmer.asia/careers",
    email: 'info@ifarmer.asia',
    linkedin: "linkedin.com/company/ifarmerasia/",
    contact: null
  },
  {
    name: "Shikho",
    location: "Rangs Paramount, Level 11 Block-K, Plot-11 Rd No 17, Dhaka",
    website: "shikho.com",
    career: 'shikho.freshteam.com/jobs',
    email: "team@shikho.com",
    linkedin: "linkedin.com/company/shikho",
    contact: null
  },
  {
    name: "Arogga",
    location: "D/15-1, Road-36, Block-D, Section-10, Mirpur, Dhaka",
    website: "arogga.com",
    career: "arogga.com/jobs",
    email: "info@arogga.com",
    linkedin: "linkedin.com/company/arogga",
    contact: null
  },
  {
    name: "Sheba.xyz",
    location: "Plot: 2, Road: 11, Block: H, M&S Tower, Dhaka",
    website: "sheba.xyz",
    career: "careers.smartrecruiters.com/Shebaxyz3; facebook.com/shebacareer/",
    email: "info@sheba.xyz",
    linkedin: "linkedin.com/company/sheba/",
    contact: null
  },
  {
    name: "SOLshare",
    location: "LM Tower (2nd Floor), Ka/87, Joar Shahara Bazar Road Vatara, Dhaka",
    website: "solshare.com",
    career: "solshare.com/career",
    email: "contact@solshare.com",
    linkedin: "linkedin.com/company/me-solshare",
    contact: null
  },
  {
    name: "Astha IT",
    location: "116 Kazi Nazrul Islam Ave, Dhaka",
    website: "asthait.com",
    career: "ait.inc/career",
    email: "jobs@asthait.com",
    linkedin: "linkedin.com/company/asthait",
    contact: null
  },
  {
    name: "aamra technologies",
    location: "Safura Tower (9th Floor) 20 Kemal Ataturk Avenue, Banani C/A, Dhaka",
    website: "aamra.com.bd",
    career: "people.aamra.com.bd; aamratechnologies.com/career",
    email: "hrod.aamra@aamra.com.bd",
    linkedin: "linkedin.com/company/aamracompanies",
    contact: null
  },
  {
    name: "Millennium Info Solution",
    location: "18th Floor, Administrative Building-1, Grameen Bank Bhaban, Mirpur-2, Dhaka",
    website: "mislbd.com",
    career: "mislbd.com/application-platform",
    email: "career@mislbd.com",
    linkedin: "linkedin.com/company/millennium-information-solution-ltd.",
    contact: null
  },
  {
    name: "HRSOFTBD",
    location: "P-7, Nurjahan Road, Mohammadpur, Dhaka-1207",
    website: "hrsoftbd.com",
    career: "hrsoftbd.com/site/career",
    email: "hr@hrsoftbd.com",
    linkedin: "linkedin.com/company/hrsoftbd",
    contact: null
  },
  {
    name: "Mysoftheaven (BD) Ltd",
    location: "P.R.Tower, 924/1, Level 8, Begum Rokeya Sarani, Shewrapara , Mirpur, Dhaka",
    website: "mysoftheaven.com",
    career: "mysoftheaven.com/career",
    email: "hr@mysoftheaven.com",
    linkedin: "linkedin.com/company/mysoftheaven",
    contact: null
  },
  {
    name: "Pridesys IT",
    location: "Level 6, 20/21 Garden Road, Kawran Bazar, Dhaka",
    website: "pridesys.com",
    career: "pridesys.com/careers",
    email: "career@pridesys.com",
    linkedin: "linkedin.com/company/pridesys-it-ltd",
    contact: null
  },
  {
    name: "Ollyo",
    location: "House 1, Patira, Khilkhet, Dhaka",
    website: "ollyo.com",
    career: "ollyo.com/careers",
    email: "hello@ollyo.com",
    linkedin: "linkedin.com/company/ollyo",
    contact: null
  },
  {
    name: "Inument Solution",
    location: "House# 527 (3rd floor), Road# 10 (East), Baridhara DOHS, Dhaka",
    website: "inument.com",
    career: "inument.com/careers/",
    email: "jobs@inument.com",
    linkedin: "linkedin.com/company/inument",
    contact: null
  },
  {
    name: "Bondstein Tech",
    location: "138/1 Tejgaon Industrial Area, Tejgaon, Dhaka",
    website: "bondstein.com",
    career: null,
    email: "info@bondstein.com",
    linkedin: "linkedin.com/company/bondstein",
    contact: null
  },
  {
    name: "NGen IT Limited",
    location: "36-37, Probal Housing, Ring Road, Mohammadpur, Dhaka",
    website: "ngenitltd.com",
    career: "ngenitltd.com/jobs",
    email: "sales@ngenitltd.com",
    linkedin: "linkedin.com/company/ngenitltd/",
    contact: null
  },
  {
    name: "Creative IT Soft",
    location: "Parliament View, Plot-5/9, Block-A, Lalmatia, Dhaka",
    website: "creativeitsoft.net",
    career: "creativeitsoft.net/gb/company-career",
    email: "creativeitsoft@gmail.com",
    linkedin: "linkedin.com/company/creative-it-soft",
    contact: null
  },
  {
    name: "Shohoz Software",
    location: "4th Floor, 5A, House: 202/D, Haji SolimUddin Ln, Middle Badda, Dhaka",
    website: "shohozsoftware.com",
    career: "shohozsoftware.com/career",
    email: "hr@shohozsoftware.com",
    linkedin: "linkedin.com/company/shohozsoftware",
    contact: null
  },
  {
    name: "Shohoz",
    location: "Banani 21, House 55/b, block b, Dhaka",
    website: "shohoz.com",
    career: null,
    email: "career@shohoz.com",
    linkedin: "linkedin.com/company/shohoz",
    contact: null
  },
  {
    name: "Nascenia",
    location: "House 6/14, Block A, Lalmatia, Dhaka",
    website: "nascenia.com",
    career: "nascenia.com/careers",
    email: "career@nascenia.com",
    linkedin: "linkedin.com/company/nascenia-it",
    contact: null
  },
  {
    name: "Appifydevs",
    location: "B, Block- B, House:- 28 Road:-1, Dhaka",
    website: "appifydevs.com",
    career: "appifydevs.com/career",
    email: "hr@appifydevs.com",
    linkedin: "linkedin.com/company/appifydevs",
    contact: null
  },
  {
    name: "Appifylab",
    location: "Akhter shoping city, 4th floor, Modina Market, Sylhet",
    website: "appifylab.com",
    career: "appifylab.com/career",
    email: "hr@appifylab.com",
    linkedin: "linkedin.com/company/appifylab",
    contact: null
  },
  {
    name: "ATI Limited",
    location: "ATI Centre, House-07, Gareeb-E-Nawaz Avenue, Sector-11, Uttara",
    website: "atilimited.net",
    career: "atilimited.net/career",
    email: "hr@atilimited.net",
    linkedin: "linkedin.com/company/atilimited",
    contact: null
  },
  {
    name: "Augmedix Inc.",
    location: "Rahman’s Regnum Centre (level 15), 191/1, Bir Uttam Mir Shawkat Road, Tejgaon I/A, Dhaka",
    website: "augmedix.com.bd",
    career: "https://jobs.ashbyhq.com/Commure",
    email: "ax-talent-acquisition@commure.com",
    linkedin: "linkedin.com/company/augmedixinc",
    contact: null
  },
  {
    name: "BRAC IT Services",
    location: "Nafi Tower (Level-13), 53 Gulshan Ave, Dhaka",
    website: "bracits.com",
    career: "bracits.com/career",
    email: "info@bracits.com",
    linkedin: "linkedin.com/company/bracits",
    contact: null
  },
  {
    name: "CodersTrust",
    location: "House# 82, Road# 19/A, Block# E, Banani, Dhaka",
    website: "coderstrust.global",
    career: "coderstrust.global/join-us",
    email: "hello@coderstrustbd.com",
    linkedin: "linkedin.com/company/coderstrust-bangladesh",
    contact: null
  },
  {
    name: "Dhrubok Infotech Services",
    location: "Sara Aftab Tower, 29 Ring Rd, Dhaka",
    website: "dhrubokinfotech.com",
    career: "dhrubokinfotech.com/career",
    email: "hr@dhrubokinfotech.com",
    linkedin: "linkedin.com/company/dhrubokinfotech",
    contact: null
  },
  {
    name: "Divine IT Limited",
    location: "House 29, Road 12, Sector 10, Uttara, Dhaka",
    website: "divineit.net",
    career: "divineit.net/about/careers",
    email: "jobs@divineit.net",
    linkedin: "linkedin.com/company/divineitlimited",
    contact: null
  },
  {
    name: "Dream71",
    location: "House No 16, Block - A, Basundhara R/A, Main Road, Dhaka",
    website: "dream71.com",
    career: "dream71.com/career",
    email: "career@dream71.com",
    linkedin: "linkedin.com/company/dream71-bangladesh-ltd-",
    contact: null
  },
  {
    name: "GeeksSSort",
    location: "Mirpur DOHS, Pallabi, Dhaka",
    website: "geekssort.com",
    career: "geekssort.com/career",
    email: "careers@geekssort.com",
    linkedin: "linkedin.com/company/geekssort",
    contact: null
  },
  {
    name: "Genex Infosys Limited",
    location: "Nitol Niloy Tower (Level 6-12), Nikunja C/A, Airport Road, Dhaka",
    website: "genexinfosys.com",
    career: "genexinfosys.com/career.php",
    email: "info@genexinfosys.com",
    linkedin: "linkedin.com/company/genex-infosys-limited",
    contact: null
  },
  {
    name: "IBOS Limited",
    location: "6/2 Kazi Nazrul Islam Rd, Dhaka",
    website: "ibos.io",
    career: "ibos.io/career",
    email: "hr@ibos.io",
    linkedin: "linkedin.com/company/iboslimited",
    contact: null
  },
  {
    name: "IQVIA",
    location: "Remote",
    website: "iqvia.com",
    career: "jobs.iqvia.com",
    email: "careers@iqvia.com",
    linkedin: "linkedin.com/company/iqvia",
    contact: null
  },
  {
    name: "Jatri Services Limited",
    location: "Road 24, House 15, Gulshan-02, Dhaka",
    website: "jatri.co",
    career: "jatri.co/career",
    email: "career@jatri.co",
    linkedin: "linkedin.com/company/jatri-app",
    contact: null
  },
  {
    name: "Magnito",
    location: "House 7, Road 137, Gulshan 1, Dhaka",
    website: "magnito.agency",
    career: "magnito.agency/join-the-cult",
    email: "career@magnito.agency",
    linkedin: "linkedin.com/company/magnito",
    contact: null
  },
  {
    name: "MonstarLab Bangladesh",
    location: "Plot No. 5, Paragon House, Dhaka",
    website: "monstar-lab.com/bd",
    career: "monstar-lab.com/bd/career",
    email: "contract@monstar-lab.com",
    linkedin: "linkedin.com/company/monstarlab",
    contact: null
  },
  {
    name: "Optimizely",
    location: "Gulshan Centre Point, Plot 23-26, Rd 90, Dhaka",
    website: "optimizely.com",
    career: "optimizely.com/careers",
    email: "careers@optimizely.com",
    linkedin: "linkedin.com/company/optimizely",
    contact: null
  },
  {
    name: "Orange Toolz",
    location: "360 Degree house 77, Road 13, Sector 10, Uttara, DHAKA",
    website: "orangetoolz.com",
    career: "career.orangetoolz.com",
    email: "career@orangetoolz.com",
    linkedin: "linkedin.com/company/orangetoolz.com",
    contact: null
  },
  {
    name: "Portonics Limited",
    location: "Navana HR Tower 1, Level 8, Plot - 410, Bir Uttam Mir Showkat Sarak, Tejgaon I/A, Dhaka",
    website: "portonics.com",
    career: "portonics.com/career",
    email: "hr@portonics.com",
    linkedin: "linkedin.com/company/portonics",
    contact: null
  },
  {
    name: "ReliSource",
    location: "Building# 4A1, Road 139, Gulshan 1, Dhaka 1212",
    website: "relisource.com",
    career: "relisource.com/careers; new.relisource.com/careers/",
    email: "career@relisource.com",
    linkedin: "linkedin.com/company/relisource",
    contact: null
  },
  {
    name: "ShellBeeHaken",
    location: "Level 3, 6 & 7, House 1077, Road 6A, Avenue 8, Mirpur DOHS, Dhaka",
    website: "shellbeehaken.com",
    career: "shellbeehaken.com/join-us",
    email: null,
    linkedin: "linkedin.com/company/shellbeehaken",
    contact: null
  },
  {
    name: "Silicon Orchard Limited",
    location: "House 01, Avenue 01, Block D, Section 11, Mirpur, Dhaka",
    website: "siliconorchard.com",
    career: "siliconorchard.com/career",
    email: "careers@siliconorchard.com",
    linkedin: "linkedin.com/company/silicon-orchard-ltd",
    contact: null
  },
  {
    name: "Spring Rain IT",
    location: "Section # 2, Block - C, Avenue # 1, House # 18, Mirpur, Dhaka",
    website: "springrain.io",
    career: "springrain.io/careers",
    email: "career@springrain.io",
    linkedin: "linkedin.com/company/spring-rain/",
    contact: null
  },
  {
    name: "SSL Wireless",
    location: "93 B, New Eskaton Road, Dhaka",
    website: "sslwireless.com",
    career: "sslwireless.com/career",
    email: "query@sslwireless.com",
    linkedin: "linkedin.com/company/ssl-wireless",
    contact: null
  },
  {
    name: "Strativ BD Ltd.",
    location: "Tower, 14, Nakir, 4 Pallabi Rd, Dhaka",
    website: "strativ.se/en",
    career: "strativ.se/en/karriar",
    email: null,
    linkedin: "linkedin.com/company/strativ-ab",
    contact: null
  },
  {
    name: "TechnoVista Limited",
    location: "House: 4, Road: 9/B, Nikunja 1, Dhaka",
    website: "technovista.com.bd",
    career: "technovista.com.bd/career",
    email: "hr@technovista.com.bd",
    linkedin: "linkedin.com/company/technovista.bd/",
    contact: null
  },
  {
    name: "Vantage Labs",
    location: "House: 4, Road: 9/B, Nikunja – 1, Dhaka",
    website: "vantage.com",
    career: "vantage.com/careers",
    email: "info@technovista.com.bd",
    linkedin: "linkedin.com/company/vantage-labs-dhaka",
    contact: null
  },
  {
    name: "WellDev",
    location: "25th Floor, Ahmed Tower, Kemal Ataturk Ave, Dhaka",
    website: "welldev.io",
    career: "welldev.io/careers",
    email: "recruitment@welldev.io",
    linkedin: "linkedin.com/company/welldevintl",
    contact: null
  },
  {
    name: "weDevs Ltd",
    location: "House:1005,1007, Avenue:11, Road:09, Dhaka",
    website: "wedevs.com",
    career: "wedevs.com/career",
    email: "hello@wedevs.com",
    linkedin: "linkedin.com/company/wedevs",
    contact: null
  },
  {
    name: "Workspace InfoTech Limited",
    location: "House-16, Road-12, (4th floor), Nikunja-2, Khilkhet, Dhaka",
    website: "workspaceit.com",
    career: "workspaceit.com/career",
    email: "hr@workspaceit.com",
    linkedin: "linkedin.com/company/workspace-infotech-limited",
    contact: null
  },
  {
    name: "ERA-InfoTech Limited",
    location: "Fareast Tower, 35 Topkhana Road, (Level-3), Dhaka",
    website: "erainfotechbd.com",
    career: "https://talent.talent-troop.com/job-list/companies/era",
    email: "marketing@erainfotechbd.com",
    linkedin: "linkedin.com/company/era-infotech-ltd",
    contact: null
  },
  {
    name: "Gain Solutions",
    location: "Haji Kujrat Ali Mollah Super Market, 6th floor , Mirpur-12, Dhaka",
    website: "gainhq.com",
    career: "career.gainhq.com",
    email: "hello@gainhq.com",
    linkedin: "linkedin.com/company/gainhq-com",
    contact: null
  },
  {
    name: "Fiber@Home Ltd",
    location: "House #7/B, Road #13, Gulshan-1, Dhaka",
    website: "fiberathome.net",
    career: "fiberathome.net/career",
    email: "jobs@fiberathome.net",
    linkedin: "linkedin.com/company/FiberAtHomeLimited",
    contact: null
  },
  {
    name: "Nagad",
    location: "Delta Dahlia Tower (Level 13 and 14), 36 Kemal Ataturk Avenue, Banani, Dhaka",
    website: "nagad.com.bd",
    career: "nagad.com.bd/career",
    email: "recruitment@nagad.com.bd",
    linkedin: "linkedin.com/company/mynagad",
    contact: null
  },
  {
    name: "Upay",
    location: "Plot CWS (A) -1, Road 34, Gulshan Avenue, Dhaka",
    website: "upaybd.com",
    career: null,
    email: "info@upaybd.com",
    linkedin: "linkedin.com/company/upay-ucbfintech",
    contact: null
  },
  {
    name: "Cloudly Infotech Limited",
    location: "House #429 (2nd Floor), Road#30, Mohakhali DOHS, Dhaka",
    website: "cloudly.com.bd",
    career: "cloudly.com.bd/careers",
    email: "career@cloudly.io",
    linkedin: "linkedin.com/company/cloudlybd",
    contact: null
  },
  {
    name: "ZeuZ",
    location: "Remote",
    website: "zeuz.ai",
    career: "zeuz.ai/career",
    email: "info@zeuz.ai",
    linkedin: "linkedin.com/company/zeuzai/",
    contact: null
  },
  {
    name: "Mediusware",
    location: "24/1, Taj Mahal Road, Shiya Masjid mor, Floor - 8th & 9th, Ring Road, Dhaka",
    website: "mediusware.com",
    career: "mediusware.com/career",
    email: "hr@mediusware.com",
    linkedin: "linkedin.com/company/mediusware",
    contact: null
  },
  {
    name: "TallyKhata",
    location: "Banani, Dhaka",
    website: "tallykhata.com",
    career: null,
    email: "careers@tallykhata.com",
    linkedin: "linkedin.com/company/tallykhata",
    contact: null
  },
  {
    name: "Shadhin Lab",
    location: "Riajbag, Road-6, Rampura, Dhaka",
    website: "shadhinlab.com",
    career: "shadhinlab.com/career",
    email: "career@shadhinlab.com",
    linkedin: "linkedin.com/company/shadhin-lab-llc",
    contact: null
  },
  {
    name: "DevotrixInc",
    location: "Noor Nagar, Khalishpur, Khulna",
    website: "devotrixinc.com",
    career: "devotrixinc.com/careers",
    email: "career@devotrixinc.com",
    linkedin: "linkedin.com/company/devotrixinc",
    contact: null
  },
  {
    name: "VitalGap",
    location: "Remote",
    website: "vitalgap.com",
    career: null,
    email: "info@vitalgap.com",
    linkedin: "linkedin.com/company/vitalgap",
    contact: null
  },
  {
    name: "Robi",
    location: "The Forum, 187, 188/B, Bir Uttam Mir Shawkat Sarak, Tejgaon, Dhaka",
    website: "robi.com",
    career: "robicareer.com",
    email: "robicareers@robi.com.bd",
    linkedin: "linkedin.com/company/robi-axiata-limited",
    contact: null
  },
  {
    name: "Grameenphone",
    location: "TGPHOUSE, Bashundhara, Baridhara, Dhaka",
    website: "grameenphone.com",
    career: "career.grameenphone.com/job",
    email: "info@grameenphone.com",
    linkedin: "linkedin.com/company/grameenphone-ltd",
    contact: null
  },
  {
    name: "Banglalink",
    location: "Tigers' Den, House 4 (SW), Bir Uttam Mir Shawkat Sharak Gulshan 1, Dhaka",
    website: "banglalink.net",
    career: "banglalink.net/en/careers",
    email: "info@banglalink.net",
    linkedin: "linkedin.com/company/banglalink",
    contact: null
  },
  {
    name: "Nymph Solutions Ltd",
    location: "Level 3, House No. 470, Road No. 31, Mohakhali DOHS, Dhaka",
    website: "nymphsolutions.com",
    career: "career.nymphsolutions.com",
    email: "hr@nymphsolutions.com",
    linkedin: "linkedin.com/company/nymphsolutions",
    contact: null
  },
  {
    name: "Reckitt Benckiser PLC",
    location: "The Glass House, 9th & 10th Floors, Plot-2, Block-SE (B), 38 Gulshan Avenue, Dhaka",
    website: "reckitt.com",
    career: "reckitt.com/careers; linkedin.com/company/reckitt/jobs; careers.reckitt.com/job",
    email: null,
    linkedin: "linkedin.com/company/reckitt",
    contact: null
  },

  {
    name: "ADN DigiNet",
    location: "House: 11, Navana Shefali, Road: 14, Gulshan-1, Dhaka",
    website: "adndiginet.com",
    career: "adndiginet.com/career",
    email: "career@adndiginet.com",
    linkedin: "linkedin.com/company/adndiginet",
    contact: null
  },

  {
    name: "OnnoRokom Projukti Limited",
    location: "Tropical Noor Tower (Level-3), 40 Kazi Nazrul Islam Avenue, Karwan Bazar, Dhaka",
    website: "onnorokomprojukti.com",
    career: "onnorokomprojukti.com/Career",
    email: "info@onnorokomprojukti.com",
    linkedin: "linkedin.com/company/onnorokom-projukti-limited",
    contact: null
  },
  {
    name: "WPP Production",
    location: "Road 11, House 76/A, 3rd Floor, Banani, Dhaka",
    website: "wppproduction.com",
    career: "wpp.com/careers",
    email: "careers@wppproduction.com",
    linkedin: "linkedin.com/company/wppproductiondhaka",
    contact: null
  },
  {
    name: "Qtec Solution Limited",
    location: "House 23, Road 04, Nikunja-2, Dhaka",
    website: "qtecsolution.com",
    career: "hrm.qtecsolution.net",
    email: "info@qtecsolution.com",
    linkedin: "linkedin.com/company/qtec-solution",
    contact: null
  },
  {
    name: "ZMC Technologies Ltd.",
    location: "House 147, Road 13/B, Block E, Banani, Dhaka",
    website: "zmctechnologies.com",
    career: "zmctechnologies.com/careers",
    email: "contact@zmctechnologies.com",
    linkedin: "linkedin.com/company/zmctech",
    contact: null
  },
  {
    name: "CodeCrafters International Ltd.",
    location: "Suite 801, 17/C Panthapath, Dhaka",
    website: "codecraftersintl.com",
    career: "codecraftersintl.com/join-our-data-examiner-team/",
    email: "solutions@codecraftersintl.com",
    linkedin: "linkedin.com/company/codecrafters-international-ltd-",
    contact: null
  },
  {
    name: "Shanta Holdings Ltd.",
    location: "Shanta Forum, East Tower, Level 20-22, 187-188/B Bir Uttam Mir Shawkat Sarak, Tejgaon, Dhaka",
    website: "shantaholdings.com",
    career: "shantaholdings.com/career",
    email: "hr@shantaholdings.com",
    linkedin: "linkedin.com/company/shantaholdings",
    contact: null
  },
  {
    name: "Bangladesh Software Solution",
    location: "House No: 95, Floor: 1st(A1), Road 9/A, Dhanmondi, Dhaka",
    website: "bssoln.com",
    career: "bssoln.com/careers/",
    email: "info@bssoln.com; bssolnjobs@gmail.com",
    linkedin: "linkedin.com/company/bangladesh-software-solution",
    contact: null
  },
  {
    name: "Searchlite Communications Ltd.",
    location: "House # 42 Road # 3/A , Nikunja-01, Khilkhet, Dhaka",
    website: "searchlitebd.net",
    career: "searchlitebd.net/jobs",
    email: "info@searchlitebd.net",
    linkedin: "linkedin.com/company/searchlite-communications-ltd",
    contact: null
  },
  {
    name: "Nybsys (Pvt) Ltd.",
    location: "Block-A, Road-Ave-1, House-7, Section-11, Mirpur, Dhaka",
    website: "nybsys.com",
    career: "nybsys.com/career",
    email: "hrd@nybsys.com",
    linkedin: "linkedin.com/company/nybsys",
    contact: null
  },
  {
    name: "Synesis IT",
    location: "Level 2 & 3, BDBL Bhaban, 12 Kawran Bazar, Dhaka",
    website: "synesisit.com.bd",
    career: null,
    email: "info@synesisit.com.bd",
    linkedin: "linkedin.com/company/synesis-it-limited",
    contact: null
  },
  {
    name: "Caretutors Technologies Ltd.",
    location: "Level 2, Rangs Naharz, House 14, Road Shahjalal Avenue, Sector 4, Uttara, Dhaka",
    website: "caretutors.com",
    career: null,
    email: "career@caretutors.com",
    linkedin: "linkedin.com/company/care-tutors",
    contact: null
  },
  {
    name: "Be Data Solutions",
    location: "18/3 (3rd Floor), Ring Road, Block F, Mohammadpur, Dhaka",
    website: "bedatasolutions.com",
    career: null,
    email: "recruitment@bedatasolutions.com",
    linkedin: "linkedin.com/company/be-data-solutions",
    contact: null
  },
  {
    name: "NerdDevs",
    location: "House 40, Block A, Main Road, Aftabnagar, Badda, Dhaka",
    website: "nerddevs.com",
    career: null,
    email: "jobs@nerddevs.com",
    linkedin: "linkedin.com/company/nerddevs",
    contact: null
  },
  {
    name: "Pimjo LLC",
    location: "Level 2, House 03, Road 05, Baridhara J Block, Dhaka",
    website: "pimjo.com",
    career: "pimjo.com/careers",
    email: "hello@pimjo.com",
    linkedin: "linkedin.com/company/pimjo",
    contact: null
  },
  {
    name: "Doin Tech Ltd.",
    location: "Facilities Tower (12th Floor), Kha-199/2 Pragati Sarani, Dhaka",
    website: "doin.tech",
    career: "doin.tech/career",
    email: "hello@doin.tech",
    linkedin: "linkedin.com/company/dointechltd",
    contact: null
  },
  {
    name: "DoTech",
    location: "Romask Tower, 22/3, Level 12, Karwan Bazar, Tejgaon, Dhaka",
    website: "dotech.biz",
    career: null,
    email: "info@dotech.com",
    linkedin: "linkedin.com/company/dotech-limited1",
    contact: null
  },
  {
    name: "Rokomari.com",
    location: "2/1/E & 2/2/E Eden Center / Eden Complex, Arambagh, Motijheel, Dhaka",
    website: "rokomari.com",
    career: "rokomari.com/career/job",
    email: "careers@rokomari.com",
    linkedin: "linkedin.com/company/rokomari.com",
    contact: null
  },
  {
    name: "Design Monks",
    location: "Ventura Iconia, Plot 37, Road No. 11, Banani, Dhaka",
    website: "designmonks.co",
    career: "designmonks.co/career/",
    email: "career@designmonks.co; hello@designmonks.co",
    linkedin: "linkedin.com/company/designmonks",
    contact: null
  },
  {
    name: "TygrLabs",
    location: "Level 5, Plot No 11, Rd No 113/A, Gulshan-2, Dhaka",
    website: "tygrlabs.co",
    career: "tygrlabs.co/career",
    email: "career@tygrlabs.co",
    linkedin: "linkedin.com/company/tygrlabs",
    contact: null
  },
  {
    name: "EchoaSoft Ltd.",
    location: "House 01, Road No. 01, Nikunja-2, Khilkhet, Dhaka",
    website: "echoasoft.com",
    career: "echoasoft.com/career",
    email: "info@echoasoft.com",
    linkedin: "linkedin.com/company/echoasoft",
    contact: null
  },
  {
    name: "Againsoft",
    location: "60, West Agargaon, Sher-E-Bangla Nagar, Dhaka",
    website: "againsoft.com",
    career: "againsoft.com/career",
    email: "hr@againsoft.com",
    linkedin: "linkedin.com/company/againsoft/",
    contact: null
  },
  {
    name: "Olynex LLC",
    location: "Akota Bhaban, 1st Floor, Main road Uposhohor, Bogura",
    website: "olynex.com",
    career: "olynex.com/career",
    email: "hello@olynex.com",
    linkedin: "linkedin.com/company/olynexagency",
    contact: null
  },
  {
    name: "MetLife Bangladesh",
    location: "MetLife Building, 18-20 Motijheel C.A., Dhaka",
    website: "metlife.com.bd",
    career: "metlifecareers.com/en_US/ml; linkedin.com/company/metlife/jobs/",
    email: null,
    linkedin: "linkedin.com/company/metlife",
    contact: null
  },
  {
    name: "FinSource Limited",
    location: "Paragon House (3rd Floor), 5 Mohakhali Commercial Area, Mohakhali, Dhaka",
    website: "finsource.net",
    career: "finsource.net/currentvacancies",
    email: "contact@finsource.net",
    linkedin: "linkedin.com/company/finsource.limited ",
    contact: null
  },
  {
    name: "Sazim",
    location: "J.R. Casero Tower, Road No. 1, Dhaka",
    website: "sazim.io",
    career: "sazim.io/careers",
    email: "talent@sazim.io",
    linkedin: "linkedin.com/company/sazim",
    contact: null
  },
  {
    name: "Truck Lagbe",
    location: "House 221 (2nd Floor), Road 15, Mohakhali DOHS, Dhaka",
    website: "trucklagbe.com",
    career: "trucklagbe.com/career",
    email: "career@trucklagbe.com",
    linkedin: "linkedin.com/company/trucklagbe",
    contact: null
  },
  {
    name: "CONNEKT Studio",
    location: "Joleswaritola, Bogra",
    website: "connekt.studio",
    career: "connekt.studio/career/",
    email: "hello@connekt.studio",
    linkedin: "linkedin.com/company/connektstudio",
    contact: null
  },
  {
    name: "All Generation Tech",
    location: "House 56/B, Level 4, Road No. 132, Gulshan 1, Dhaka",
    website: "allgentech.io",
    career: "allgentech.io/careers",
    email: "info@allgentech.io",
    linkedin: "linkedin.com/company/all-generation-tech",
    contact: null
  },
  {
    name: "MiraiLit Ltd.",
    location: "102/B, Chowdhuripara, Malibagh, Dhaka",
    website: "mirailit.com",
    career: "mirailit.aplicaro.com",
    email: "contact@mirailit.com",
    linkedin: "linkedin.com/company/mirailit",
    contact: null
  },
  {
    name: "Efoli",
    location: "Mirpur DOHS, Dhaka",
    website: "efoli.com",
    career: "efoli.com/career",
    email: "info@efoli.com",
    linkedin: "linkedin.com/company/efoli",
    contact: null
  },
  {
    name: "Luminar Technology",
    location: "Ka-56, Kuratioli, Kuril, Khilkhet, Dhaka",
    website: "luminartechnology.com",
    career: "luminartechnology.com/career",
    email: "hello@luminartechnology.com",
    linkedin: "linkedin.com/company/luminartechnology",
    contact: null
  },
  {
    name: "Radiant Digital Solutions",
    location: "BDBL (11th Floor) 12, Kawran Bazar, Dhaka",
    website: "radiantds.com",
    career: "radiantds.com/careers",
    email: "info@radiantds.com",
    linkedin: "linkedin.com/company/radiant-data-systems-ltd",
    contact: null
  },
  {
    name: "Ontik Technology",
    location: "3rd Floor, House 11B, Road 30 Gulshan Ave, Dhaka",
    website: "ontiktechnology.com",
    career: "ontiktechnology.com/career",
    email: "info@ontiktechnology.com",
    linkedin: "linkedin.com/company/ontiktechnology",
    contact: null
  },
  {
    name: "Coderex",
    location: "Level 12B, 69/1 Chandrashila Suvastu Tower, Panthapath, Dhaka",
    website: "coderex.co",
    career: "inside.coderex.co/jobs",
    email: "enquiry@coderex.co",
    linkedin: "linkedin.com/company/coderex-ltd",
    contact: null
  },
  {
    name: "WPXPO",
    location: "House No. 1/C, Road No. 1, Shyamoli, Dhaka",
    website: "wpxpo.com",
    career: "www.wpxpo.com/career",
    email: "career@wpxpo.com",
    linkedin: "linkedin.com/company/wpxpohq",
    contact: null
  },
  {
    name: "Startise",
    location: "House 592, Avenue 05, Road 08, Mirpur DOHS, Pallabi, Dhaka",
    website: "startise.com",
    career: "startise.com/careers",
    email: "info@startise.com",
    linkedin: "linkedin.com/company/startise",
    contact: null
  },
  {
    name: "Bizzntek",
    location: "House 19, Road 01, Sector 13, Uttara, Dhaka",
    website: "bizzntek.com",
    career: "linkedin.com/company/bizzntek/jobs",
    email: "info@bizzntek.com",
    linkedin: "linkedin.com/company/bizzntek",
    contact: null
  },
  {
    name: "SecureTest Partners",
    location: "322/1, South Goran, Khilgaon, Dhaka",
    website: "securetestpartners.com",
    career: "securetestpartners.com/job",
    email: "info@securetestpartners.com",
    linkedin: "linkedin.com/company/securetest-partners",
    contact: null
  },
  {
    name: "Avian BPO & IT",
    location: "House 1188, Avenue 11, Mirpur DOHS, Dhaka",
    website: "avianbpo.com",
    career: "career.avianbpo.com",
    email: "info@avianbpo.com",
    linkedin: "linkedin.com/company/avianbpo",
    contact: null
  },
  {
    name: "Intertek Bangladesh",
    location: "Intertek House, Phoenix Tower, 3rd Floor, Tejgaon Industrial Area, Dhaka",
    website: "intertek.com/bangladesh",
    career: "intertek.com/bangladesh/careers/",
    email: null,
    linkedin: "linkedin.com/company/bangladesh-intertek",
    contact: null
  },
  {
    name: "Link3 Technologies Ltd.",
    location: "Police Plaza Concord, 13th Floor, Plot-02, Road-144, Gulshan-1, Dhaka",
    website: "link3.net",
    career: "link3.net/career",
    email: "jobs@link3.net; info@link3.net",
    linkedin: "linkedin.com/company/link3-technologies",
    contact: null
  },
  {
    name: "W3 Engineers Ltd.",
    location: "World Business Centrum, 4th Floor, 76/A, Banani-11, Dhaka",
    website: "w3engineers.com",
    career: "w3engineers.com/career",
    email: "jobs@w3engineers.com",
    linkedin: "linkedin.com/company/w3engineers",
    contact: null
  },
  {
    name: "FigLab",
    location: "Suite #3B, Haque Chamber, 89/2 West Panthapath, Dhaka",
    website: "figlab.io",
    career: "figlab.io/career",
    email: "hello@figlab.io",
    linkedin: "linkedin.com/company/figlab",
    contact: null
  },
  {
    name: "6sense HQ",
    location: "House 15, Road 4, Block G, Banasree, Dhaka",
    website: "6sensehq.com",
    career: "6sensehq.com/career",
    email: "hello@6sensehq.com",
    linkedin: "linkedin.com/company/6sensehq",
    contact: null
  },
  {
    name: "Digi Jadoo Broadband Ltd.",
    location: "Lotus Kamal Tower-One, Level-11, 57 Joar Sahara C/A, Nikunja 2, Dhaka",
    website: "jadoodigital.com",
    career: "jadoodigital.com/index.php/career/",
    email: " career@digijadoo.com",
    linkedin: "linkedin.com/company/digi-jadoo-broadband-limited",
    contact: null
  },
  {
    name: "Field Nation",
    location: "House:23, Shah Makdum Avenue, Sector 12, Uttara, Dhaka",
    website: "fieldnation.com",
    career: "fieldnation.com/careers",
    email: "support@fieldnation.com; info@fieldnation.com",
    linkedin: "linkedin.com/company/field-nation-bd",
    contact: null
  },
  {
    name: "TechBrigades LTD",
    location: "House B/14 & B/30, (Sawpno Building) 4th Floor, Block# B, Banasree Main Rd, Dhaka",
    website: "thetechbrigades.com",
    career: "thetechbrigades.com/careers",
    email: "info@thetechbrigade.com",
    linkedin: "linkedin.com/company/techbrigades",
    contact: null
  },
  {
    name: "Inovace Technologies Ltd",
    location: "H-18 (Level 4), Kazi Nazrul Islam Avenue, Shahbag, Dhaka",
    website: "inovacetech.com",
    career: "linkedin.com/company/inovace-technologies/jobs",
    email: "hr@inovacetech.com",
    linkedin: "linkedin.com/company/inovace-technologies",
    contact: null
  },
  {
    name: "Spectrum Software & Consulting Ltd (SSCL)",
    location: "7th Floor, West Side, BDBL Bhaban, 12 Kazi Nazrul Islam Avenue, Kawran Bazar, Dhaka",
    website: "sscl.tech",
    career: "career.sscl.tech",
    email: "sscl@spectrum-bd.com",
    linkedin: "linkedin.com/company/spectrum-software-and-consulting",
    contact: null
  },
  {
    name: "Right Tracks IT. Limited",
    location: "Road 29, Mohakhali DOHS, Dhaka",
    website: "righttracksit.com",
    career: null,
    email: "hr@righttracksit.com",
    linkedin: "linkedin.com/company/right-tracks-it-limited",
    contact: null
  },
  {
    name: "JustGo Technologies",
    location: "Rupayan Trade Center (8th floor) 114, Kazi Nazrul Islam Avenue, Bangla Motor, Dhaka",
    website: "justgo.com",
    career: "justgo.com/careers",
    email: "support@justgo.com",
    linkedin: "linkedin.com/company/JustGoTechnologies",
    contact: null
  },
  {
    name: "AdPlay Technology",
    location: "Plot-114, Level-4, Block-E, Road- 12, Banani, Dhaka",
    website: "adplaytechnology.com",
    career: "linkedin.com/company/adplay-mobile/jobs",
    email: "hello@adplay-mobile.com",
    linkedin: "linkedin.com/company/adplay-mobile",
    contact: null
  },
  {
    name: "SM Technology",
    location: "House #11/13, Road #5, Block C, Banasree, Rampura, Dhaka",
    website: "smtech24.com",
    career: "smtech24.com/career",
    email: "hello@smtech24.com",
    linkedin: "linkedin.com/company/smtechnology",
    contact: null
  },
  {
    name: "NEXT Ventures",
    location: "6th & 8th Floor, Cha-90, The Pearl Trade Center, 3 Pragati Sarani, Dhaka",
    website: "nextventures.io",
    career: "nextventures.io/career",
    email: "hello@nextventures.io",
    linkedin: "linkedin.com/company/nextventuresofficial",
    contact: null
  },
  {
    name: "FringeCore",
    location: "2nd Floor, House 2, Road 96, Gulshan 2, Dhaka",
    website: "fringecore.sh",
    career: "fringecore.sh/careers",
    email: "team@fringecore.sh",
    linkedin: "linkedin.com/company/fringecore/",
    contact: null
  },
  {
    name: "RedDot Digital IT Ltd",
    location: "57 & 57/A, Uday Tower (15th Floor), Gulshan 1, Gulshan Avenue, Dhaka",
    website: "reddotdigitalit.com",
    career: null,
    email: "career@reddotdigitalit.com",
    linkedin: "linkedin.com/company/reddotdigitalit",
    contact: null
  },
  {
    name: "TiCON System Ltd",
    location: "8 Gareeb-e-Newaz Ave, Uttara, Dhaka",
    website: "ticonsys.com",
    career: "linkedin.com/company/ticonsys/jobs/",
    email: "career@ticonsys.com",
    linkedin: "linkedin.com/company/ticonsys",
    contact: null
  },
  {
    name: "Augmex.io",
    location: "House: 01, Road: 12, Baridhara J Block, Dhaka",
    website: "augmex.io",
    career: "augmex.io/careers",
    email: "career@augmex.io",
    linkedin: "linkedin.com/company/scalewithaugmex",
    contact: null
  },
  {
    name: "Golden InfoSystems",
    location: "House #13, Garib-E-Nawyaz Avenue, Uttara, Dhaka",
    website: "goldeninfosystems.com",
    career: "goldeninfosystems.com/career",
    email: "hr@goldeninfotech.com.bd",
    linkedin: "linkedin.com/company/golden-infotech-bd",
    contact: null
  },
  {
    name: "RocketPhone.ai",
    location: "51-52, Bir Uttam AK Khandakar Rd, Dhaka",
    website: "rocketphone.ai",
    career: "linkedin.com/company/rocketphone/jobs/",
    email: "info@rocketphone.ai",
    linkedin: "linkedin.com/company/rocketphone",
    contact: null
  },
  {
    name: "TechnoNext",
    location: "Plot #1337–1338, Talukdar Tower, Saied Nagar, Dhaka",
    website: "technonext.com",
    career: "https://technonext.com/career",
    email: "info@technonext.com",
    linkedin: "linkedin.com/company/technonextsoftwareltd/",
    contact: null
  },
  {
    name: "Intelligent Machines",
    location: "Moar Banani 11, Ventura Iconia, Level 3, Holding 37 Road No. 11, Block H, Dhaka",
    website: "intelmachines.ai",
    career: null,
    email: "foysal@intelmachin.es",
    linkedin: "linkedin.com/company/intelligent-machines-ltd",
    contact: null
  },
  {
    name: "Kite Games Studio Ltd.",
    location: "283, Road 19/C, Mohakhali DOHS, Dhaka",
    website: "kitegamesstudio.com",
    career: "kitegamesstudio.com",
    email: "career@kitegamesstudio.com",
    linkedin: "linkedin.com/company/kite-games-studio",
    contact: null
  },
  {
    name: "Shuttle",
    location: "Road 2, Block B, Niketon Housing Society, Gulshan 1, Dhaka",
    website: "shuttlebd.com",
    career: null,
    email: "info@shuttlebd.com",
    linkedin: "linkedin.com/company/shuttlebd",
    contact: null
  },
  {
    name: "HubXpert",
    location: "Flat A7, H-889, Bashundhara Apollo Road, Dhaka",
    website: "hubxpert.com",
    career: "career.hubxpert.com/hubxpert-application-form; linkedin.com/company/hubxpert/jobs/; career.hubxpert.com/join-us",
    email: "hr@hubxpert.com",
    linkedin: "linkedin.com/company/hubxpert",
    contact: null
  },
  {
    name: "BRACNet Limited",
    location: "Navana Yusuf Infinity (Level-7), 16 Mohakhali C/A, Dhaka",
    website: "bracnet.net",
    career: "bracnet.net/career/vacancies",
    email: "support@bracmail.net",
    linkedin: "linkedin.com/company/bracnet-limited",
    contact: null
  },
  {
    name: "Wegro Global",
    location: "House 42, Road 1, Block A, Niketon, Gulshan, Dhaka",
    website: "wegro.global",
    career: "wegro.global/career",
    email: "career@wegro.global",
    linkedin: "linkedin.com/company/wegro-global",
    contact: null
  },
  {
    name: "Patricius IT",
    location: "(2nd Floor) Hit Hasina Complex, Chanmari Road, Lalkhan Bazar, Chattogram",
    website: "patriciusit.com",
    career: "patriciusit.com/job-opportunities/",
    email: "contact@patriciusit.com",
    linkedin: "linkedin.com/company/patricius-it",
    contact: null
  },
  {
    name: "NeosCoder",
    location: "198 Akij House, Bir Uttam Mir Showkat Sarak, Dhaka",
    website: "neoscoder.com",
    career: "neoscoder.com/career",
    email: "info@neoscoder.com",
    linkedin: "linkedin.com/company/neoscoder",
    contact: null
  },
  {
    name: "Klozer.io",
    location: "Remote",
    website: "klozer.io",
    career: "klozer.io/join-us",
    email: "hr.klozer@gmail.com",
    linkedin: "linkedin.com/company/klozer-inc",
    contact: null
  },
  {
    name: "Bahon Limited",
    location: "Star Center, 2nd Floor, Road-138, Block-SE(C), Plot-2, Gulshan Avenue, Gulshan-1, Dhaka",
    website: "bahon.com",
    career: null,
    email: "jobs@bahon.com",
    linkedin: "linkedin.com/company/bahon-limited",
    contact: null
  },
  {
    name: "Cartup Ltd.",
    location: "Rahman's Regnum Center, Level-6, 191/1, Tejgaon-Gulshan Link Road, Tejgaon C/A, Dhaka",
    website: "cartup.com",
    career: "lnkd.in/gudvwEhR",
    email: "customer.care@cartup.com",
    linkedin: "linkedin.com/company/cartup-bangladesh",
    contact: null
  },
  {
    name: "BanglaMark",
    location: "KA-6/A, Navana Sylvania Baridhara, Dhaka",
    website: "banglamark.com",
    career: null,
    email: "career@banglamark.com.bd",
    linkedin: "linkedin.com/in/banglamark-group-6639bb197",
    contact: null
  },
  {
    name: "Adventure Dhaka Limited",
    location: "Autograph Tower, 17th & 18th Floor, 67-68 Kemal Ataturk Avenue, Banani, Dhaka",
    website: "adventurekk.com",
    career: null,
    email: "careers@bd.adventurekk.com",
    linkedin: "linkedin.com/company/adventuredhaka",
    contact: null
  },
  {
    name: "SuperAnnotate",
    location: "149 New Montgomery St, 4th Floor, San Francisco, CA 94105, USA",
    website: "superannotate.com",
    career: "superannotate.com/careers; linkedin.com/company/superannotate/jobs",
    email: null,
    linkedin: "linkedin.com/company/superannotate",
    contact: null
  },
  {
    name: "Miaki",
    location: "House 11/A, Road 99, Momtaz Vision, Flat B-2, Gulshan 02, Dhaka",
    website: "miaki.co",
    career: "miaki.co/miaki_career",
    email: "info@miaki.co",
    linkedin: "linkedin.com/company/miaki",
    contact: null
  },
  {
    name: "Quantanite",
    location: "CRP Building, Mirpur 14, Dhaka",
    website: "quantanite.com",
    career: "careers.quantanite.com",
    email: null,
    linkedin: "linkedin.com/company/quantanite",
    contact: null
  },
  {
    name: "PriyoShop.com Ltd.",
    location: "31/A Dhanmondi-8, Dhaka",
    website: "priyoshopretail.com",
    career: "priyoshopretail.com/career/",
    email: "career@priyoshop.com",
    linkedin: "linkedin.com/company/priyoshopcom",
    contact: null
  },
  {
    name: "MedEasy Healthcare Ltd.",
    location: "Level 3, Road 14, Block C, Abdullah Park, Banasree, Dhaka",
    website: "medeasy.health",
    career: "medeasy.health/careers",
    email: "support@medeasy.health",
    linkedin: "linkedin.com/company/medeasy-healthcare-limited",
    contact: null
  },
  {
    name: "Priyo",
    location: "31/A Dhanmondi-8, Dhaka",
    website: "priyo.com",
    career: "work.priyo.com",
    email: "career@priyoshop.com",
    linkedin: "linkedin.com/company/priyo",
    contact: null
  },
  {
    name: "Daraz",
    location: "Tajwar Center, House No - 34, Road No - 19/A, Block - E, Banani, Dhaka",
    website: "daraz.com.bd",
    career: "daraz.com.bd/careers",
    email: "career@daraz.com.bd",
    linkedin: "linkedin.com/company/daraz",
    contact: null
  },
    {
    name: "foodpanda",
    location: "Level: 8, Navana pritsin, 128 Gulshan Avenue, Dhaka",
    website: "foodpanda.com.bd",
    career: "careers.foodpanda.com/bangladesh; linkedin.com/company/foodpanda/jobs",
    email: null,
    linkedin: "linkedin.com/company/foodpanda",
    contact: null
  },
      {
    name: "Wafi Solutions",
    location: "House B/109, Road 08, Mohakhali DOHS, Dhaka",
    website: "wafisolutions.com",
    career: "wafisolutions.com/career",
    email: "career@wafisolutions.com",
    linkedin: "linkedin.com/company/wafi-solutions",
    contact: null
  },

];

const list = document.getElementById('list');
const countEl = document.getElementById('count');
const noResults = document.getElementById('no-results');
const searchInput = document.getElementById('search');

// Tracks companies opened this page session (resets on reload)
const viewedCompanies = new Set();

function linkVal(v) {
  if (!v) return `<span class="na">N/A</span>`;
  const url = v.includes('@') ? `mailto:${v}` : `https://${v}`;
  return `<a href="${url}" target="_blank" rel="noopener">${v}</a>`;
}

function textVal(v) {
  return v || `<span class="na">N/A</span>`;
}

function buildItem(c) {
  const el = document.createElement('div');
  el.className = 'company-item';
  el.dataset.name = c.name.toLowerCase();
  el.dataset.location = (c.location || '').toLowerCase();
  el.innerHTML = `
    <div class="company-header" role="button" tabindex="0" aria-expanded="false">
      <span class="company-name">${c.name}</span>
      <span class="company-location-inline">${c.location || ''}</span>
      <svg class="chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 6 8 10 12 6"/>
      </svg>
    </div>
    <div class="company-body">
      <div class="info-grid">
        <span class="info-label">Location</span>
        <span class="info-value">${textVal(c.location)}</span>

        <hr class="info-divider" />

        <span class="info-label">Website</span>
        <span class="info-value">${linkVal(c.website)}</span>

        <hr class="info-divider" />

        <span class="info-label">Careers</span>
        <span class="info-value">${c.career ? c.career.split(';').map(u => linkVal(u.trim())).join('<br/>') : '<span class="na">N/A</span>'}</span>

        <hr class="info-divider" />

        <span class="info-label">Email</span>
        <span class="info-value">${c.email ? c.email.split(';').map(e => linkVal(e.trim())).join('<br/>') : '<span class="na">N/A</span>'}</span>

        <hr class="info-divider" />

        <span class="info-label">LinkedIn</span>
        <span class="info-value">${c.linkedin ? c.linkedin.split(';').map(l => linkVal(l.trim())).join('<br/>') : '<span class="na">N/A</span>'}</span>

        <hr class="info-divider" />

        <span class="info-label">HR</span>
        <span class="info-value">${textVal(c.contact)}</span>
      </div>
    </div>
  `;

  const header = el.querySelector('.company-header');
  function toggle() {
    const isOpen = el.classList.toggle('open');
    header.setAttribute('aria-expanded', isOpen);
    if (isOpen && !viewedCompanies.has(c.name)) {
      viewedCompanies.add(c.name);
      el.classList.add('viewed');
    }
  }
  header.addEventListener('click', toggle);
  header.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  });

  return el;
}

function updateCount(n, total) {
  countEl.textContent = n === total ? `${total} companies` : `${n} of ${total} companies`;
}

const sorted = [...companies].sort((a, b) => a.name.localeCompare(b.name));
const items = sorted.map(buildItem);

// Build list with alphabetical section headers
const letterDividers = {};
const frag = document.createDocumentFragment();
let currentLetter = '';
sorted.forEach((c, i) => {
  const letter = c.name[0].toUpperCase();
  if (letter !== currentLetter) {
    currentLetter = letter;
    const div = document.createElement('div');
    div.className = 'alpha-divider';
    div.textContent = letter;
    letterDividers[letter] = div;
    frag.appendChild(div);
  }
  items[i].dataset.letter = currentLetter;
  frag.appendChild(items[i]);
});
list.appendChild(frag);
updateCount(companies.length, companies.length);

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  let visible = 0;

  // Hide all dividers first; re-show only those with visible companies
  Object.values(letterDividers).forEach(d => d.style.display = 'none');

  items.forEach(el => {
    const match = !q || el.dataset.name.includes(q) || el.dataset.location.includes(q);
    el.style.display = match ? '' : 'none';
    if (match) {
      visible++;
      const div = letterDividers[el.dataset.letter];
      if (div) div.style.display = '';
    }
  });
  noResults.style.display = visible === 0 ? '' : 'none';
  updateCount(visible, companies.length);
});

document.getElementById('exportXmlBtn').addEventListener('click', (e) => {
  e.preventDefault();

  function escXml(v) {
    if (!v) return '';
    return String(v)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  const exportDate = new Date().toISOString().split('T')[0];
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '',
    `<!-- Just Apply — Bangladesh IT Companies Directory -->`,
    `<!-- Exported: ${exportDate} | Total companies: ${companies.length} -->`,
    '',
    `<companies total="${companies.length}">`,
  ];

  const sortedCompanies = [...companies].sort((a, b) => a.name.localeCompare(b.name));
  sortedCompanies.forEach((c, i) => {
    lines.push('');
    lines.push(`  <!-- ${i + 1}. ${escXml(c.name)} -->`);
    lines.push('  <company>');
    lines.push(`    <name>${escXml(c.name)}</name>`);
    lines.push(`    <location>${escXml(c.location)}</location>`);
    lines.push(`    <website>${escXml(c.website)}</website>`);
    lines.push(`    <career>${escXml(c.career)}</career>`);
    lines.push(`    <email>${escXml(c.email)}</email>`);
    lines.push(`    <linkedin>${escXml(c.linkedin)}</linkedin>`);
    lines.push(`    <contact>${escXml(c.contact)}</contact>`);
    lines.push('  </company>');
  });

  lines.push('');
  lines.push('</companies>');

  const blob = new Blob([lines.join('\n')], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'just-apply-companies.xml';
  a.click();
  URL.revokeObjectURL(url);
});
