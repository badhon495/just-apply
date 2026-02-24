const companies = [
  {
    name: "Brain Station 23 PLC",
    location: "8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka",
    website: "brainstation-23.com",
    career: "brainstation-23.easy.jobs",
    email: "career@brainstation-23.com",
    linkedin: "linkedin.com/company/brainstation-23; linkedin.com/showcase/brain-station-23-careers-and-culture",
    contact: "Raisul Kabir (CEO)"
  },
  {
    name: "BJIT Limited",
    location: "H-2275, Satarkul, Badda, Dhaka",
    website: "bjitgroup.com",
    career: "bjitgroup.com/career",
    email: "career@bjitgroup.com",
    linkedin: "linkedin.com/company/bjit",
    contact: "Hasan Abdullah (HR Recruitment Lead); Mehedi Masud (COO)"
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
    contact: "Ziaur Rahman (CEO)"
  },
  {
    name: "DataSoft Systems (BD)",
    location: "Rupayan Shelford (Level 20), Mirpur Road, Dhaka",
    website: "datasoft-bd.com",
    career: "datasoft-bd.com/career/",
    email: "career@datasoft-bd.com",
    linkedin: "linkedin.com/company/datasoft-systems-bangladesh-limited",
    contact: "Mohammad Manjur Mahmud (COO)"
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
    contact: "Shakila Tripty (Head of HR)"
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
    linkedin: "linkedin.com/company/riseuplabs",
    contact: "Rahat Hayder Chawdhary Emraan (HR Manager)"
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
    contact: "Junaid Ahmed (VP People & Culture)"
  },
  {
    name: "Pathao",
    location: "Baro Bhuiyan Genetic Plaza, House# CWN (A) 3A, Lift- 7, Road# 49, Kemal Ataturk Avenue, Gulshan Model Town, Dhaka",
    website: "pathao.com",
    career: "careers.pathao.com",
    email: "support@pathao.com",
    linkedin: "linkedin.com/company/pathao",
    contact: "Fariha Ahmed (HR Manager)"
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
    name: "Craftsmen Ltd",
    location: "DOHS Baridhara, Dhaka 1206",
    website: "craftsmenltd.com",
    career: null,
    email: "sales@craftsmenltd.com",
    linkedin: "linkedin.com/company/craftsmenltd",
    contact: null
  },
  {
    name: "iFarmer",
    location: "Dhaka",
    website: "ifarmer.asia",
    career: null,
    email: null,
    linkedin: "linkedin.com/company/ifarmer-asia",
    contact: null
  },
  {
    name: "Shikho",
    location: "Dhaka",
    website: "shikho.com",
    career: null,
    email: null,
    linkedin: "linkedin.com/company/shikho",
    contact: null
  },
  {
    name: "Arogga",
    location: "Dhaka",
    website: "arogga.com",
    career: null,
    email: null,
    linkedin: "linkedin.com/company/arogga",
    contact: null
  },
  {
    name: "Sheba.xyz",
    location: "Dhaka",
    website: "sheba.xyz",
    career: null,
    email: null,
    linkedin: "linkedin.com/company/sheba-xyz",
    contact: null
  },
  {
    name: "SOLshare",
    location: "Dhaka",
    website: "me-solshare.com",
    career: null,
    email: null,
    linkedin: "linkedin.com/company/solshare",
    contact: null
  },
  {
    name: "Astha IT",
    location: "Kazi Nazrul Islam Ave, Dhaka",
    website: "asthait.com",
    career: null,
    email: null,
    linkedin: "linkedin.com/company/asthait",
    contact: null
  },
  {
    name: "aamra technologies",
    location: "Safura Tower, Banani, Dhaka",
    website: "aamra.com.bd",
    career: null,
    email: null,
    linkedin: "linkedin.com/company/aamra-technologies-limited",
    contact: null
  },
  {
    name: "Thakral Info Systems",
    location: "Kawran Bazar, Dhaka",
    website: "thakral-bd.com",
    career: null,
    email: "omar.chowdhury_hr@thakral-bd.com",
    linkedin: "linkedin.com/company/thakral-bd",
    contact: "Md. Omar Faruq Chowdhury (Deputy Manager HR)"
  },
  {
    name: "Millennium Info Solution",
    location: "Janata Tower, Kawran Bazar, Dhaka",
    website: "mislbd.com",
    career: null,
    email: "info@mislbd.com",
    linkedin: "linkedin.com/company/mislbd",
    contact: null
  },
  {
    name: "Grameen Communications",
    location: "Mirpur, Dhaka",
    website: "grameen.org",
    career: null,
    email: "gc@grameen.org",
    linkedin: null,
    contact: null
  },
  {
    name: "Orange IT",
    location: "Dhaka",
    website: "orangebd.net",
    career: null,
    email: "info@orangebd.net",
    linkedin: null,
    contact: null
  },
  {
    name: "Flyte Solutions",
    location: "Dhaka",
    website: "flyte.pro",
    career: null,
    email: null,
    linkedin: null,
    contact: null
  },
  {
    name: "HRSOFTBD",
    location: "Dhaka",
    website: "hrsoftbd.com",
    career: null,
    email: "rony@basis.org.bd",
    linkedin: null,
    contact: "A H M Rokmunur Zaman Rony (CEO)"
  },
  {
    name: "Mysoftheaven (BD) Ltd",
    location: "North Pirerbag, Mirpur, Dhaka",
    website: "mysoftheaven.com",
    career: null,
    email: "info@mysoftheaven.com",
    linkedin: null,
    contact: null
  },
  {
    name: "Pridesys IT",
    location: "Kawran Bazar, Dhaka",
    website: "pridesys.com",
    career: null,
    email: null,
    linkedin: "linkedin.com/company/pridesys-it",
    contact: null
  },
  {
    name: "Ollyo",
    location: "Dhaka",
    website: "ollyo.com",
    career: null,
    email: null,
    linkedin: null,
    contact: null
  },
  {
    name: "Inument Solution",
    location: "House 88, Lane 10, Dhaka 1206",
    website: "inument.com",
    career: null,
    email: "hello@inument.com",
    linkedin: "linkedin.com/company/inument",
    contact: null
  },
  {
    name: "Gaze Technology",
    location: "Dhaka",
    website: "gaze.ai",
    career: null,
    email: "careers@gaze.ai",
    linkedin: "linkedin.com/company/gazeai",
    contact: null
  },
  {
    name: "Adventure Dhaka",
    location: "Autograph Tower, Banani, Dhaka",
    website: "adventurekk.com",
    career: null,
    email: null,
    linkedin: null,
    contact: null
  },
  {
    name: "Apurba Technologies",
    location: "Mohakhali New DOHS, Dhaka",
    website: "apurba.com.bd",
    career: null,
    email: null,
    linkedin: "linkedin.com/company/apurba-technologies-ltd",
    contact: null
  },
  {
    name: "Bondstein Tech",
    location: "Tejgaon I/A, Dhaka",
    website: "bondstein.com",
    career: null,
    email: "info@bondstein.com",
    linkedin: "linkedin.com/company/bondstein",
    contact: null
  },
  {
    name: "Ananda Computers",
    location: "BCS Computer City, IDB Bhaban",
    website: null,
    career: null,
    email: "mustafajabbar@gmail.com",
    linkedin: null,
    contact: "Mustafa Jabbar (President)"
  },
  {
    name: "CSL Software Resources",
    location: "Head Office, Dhaka",
    website: null,
    career: null,
    email: "rafiqul.islam@cslsoft.com",
    linkedin: null,
    contact: null
  },
  {
    name: "Axiom Technologies",
    location: "Satmasjid Road, Dhanmondi, Dhaka",
    website: null,
    career: null,
    email: "rizwan@axiom-bd.com",
    linkedin: null,
    contact: null
  },
  {
    name: "NGen IT Limited",
    location: "Mahfuza Tower, Dhaka",
    website: null,
    career: null,
    email: "sales@ngenitltd.com",
    linkedin: null,
    contact: null
  },
  {
    name: "Sysnest Limited",
    location: "Level 11, Dhaka",
    website: null,
    career: null,
    email: "omar@sysnest.com.bd",
    linkedin: null,
    contact: null
  },
  {
    name: "Creative IT Soft",
    location: "Parliament Area, Dhaka",
    website: null,
    career: null,
    email: "creativeitsoft@gmail.com",
    linkedin: null,
    contact: null
  },
  {
    name: "Elitbuzz Technologies",
    location: "Irving Rishon, Dhaka",
    website: null,
    career: null,
    email: "info@elitbuzz-bd.com",
    linkedin: null,
    contact: null
  },
  {
    name: "Shohoz",
    location: "Dhaka",
    website: "shohoz.com",
    career: null,
    email: null,
    linkedin: null,
    contact: "Aflatun Kaisar (Head of HR)"
  },
  {
    name: "Nascenia",
    location: "Banani, Dhaka",
    website: "nascenia.com",
    career: null,
    email: "info@nascenia.com",
    linkedin: "linkedin.com/company/nascenia-it",
    contact: "Shaer Hassan (CEO)"
  },
  {
    name: "All Generation Tech",
    location: "Dhaka",
    website: "allgentech.bamboohr.com",
    career: "allgentech.bamboohr.com/careers",
    email: "careers@allgentech.com",
    linkedin: "linkedin.com/company/allgentech",
    contact: null
  },
  {
    name: "Anchorblock Technology",
    location: "Dhaka",
    website: "anchorblock.ai",
    career: "anchorblock.ai/career",
    email: "hr@anchorblock.ai",
    linkedin: "linkedin.com/company/anchorblock",
    contact: null
  },
  {
    name: "Appifydevs",
    location: "Mirpur, Dhaka",
    website: "appifydevs.com",
    career: "appifydevs.com/career",
    email: "hr@appifydevs.com",
    linkedin: "linkedin.com/company/appifydevs",
    contact: null
  },
  {
    name: "Appifylab",
    location: "Sylhet",
    website: "appifylab.com",
    career: "appifylab.com/career",
    email: "hr@appifylab.com",
    linkedin: "linkedin.com/company/appifylab",
    contact: null
  },
  {
    name: "ATI Limited",
    location: "Uttara, Dhaka",
    website: "atilimited.net",
    career: "atilimited.net/career",
    email: "hr@atilimited.net",
    linkedin: "linkedin.com/company/atilimited",
    contact: null
  },
  {
    name: "Augmedix Inc.",
    location: "Dhaka",
    website: "augmedix.com",
    career: "augmedix.com/careers",
    email: "careers@augmedix.com",
    linkedin: "linkedin.com/company/augmedix",
    contact: null
  },
  {
    name: "BRAC IT Services",
    location: "Gulshan, Dhaka",
    website: "bracits.com",
    career: "bracits.com/career",
    email: "career@bracits.com",
    linkedin: "linkedin.com/company/bracits",
    contact: null
  },
  {
    name: "Circle Fintech",
    location: "Dhaka",
    website: "circlefintech.com",
    career: "circlefintech.com/career",
    email: "hr@circlefintech.com",
    linkedin: "linkedin.com/company/circlefintech",
    contact: null
  },
  {
    name: "CodersTrust",
    location: "Banani, Dhaka",
    website: "coderstrust.global",
    career: "coderstrust.global/careers",
    email: "hr@coderstrust.global",
    linkedin: "linkedin.com/company/coderstrust",
    contact: null
  },
  {
    name: "Danpite.Tech",
    location: "Mirpur, Dhaka",
    website: "danpite.tech",
    career: "danpite.tech/career",
    email: "hr@danpite.tech",
    linkedin: "linkedin.com/company/danpitetech",
    contact: null
  },
  {
    name: "Dhrubok Infotech Services",
    location: "Shyamoli, Dhaka",
    website: "dhrubokinfotech.com",
    career: "dhrubokinfotech.com/career",
    email: "hr@dhrubokinfotech.com",
    linkedin: "linkedin.com/company/dhrubokinfotech",
    contact: null
  },
  {
    name: "Divine IT Limited",
    location: "Uttara, Dhaka",
    website: "divineit.net",
    career: "divineit.net/career",
    email: "career@divineit.net",
    linkedin: "linkedin.com/company/divineitlimited",
    contact: null
  },
  {
    name: "Dream71",
    location: "Bashundhara, Dhaka",
    website: "dream71.com",
    career: "dream71.com/career",
    email: "hr@dream71.com",
    linkedin: "linkedin.com/company/dream71-bangladesh-ltd-",
    contact: null
  },
  {
    name: "Evaly Limited",
    location: "Dhanmondi, Dhaka",
    website: "evaly.com.bd",
    career: "evaly.com.bd/career",
    email: "hr@evaly.com.bd",
    linkedin: "linkedin.com/company/evaly",
    contact: null
  },
  {
    name: "Fieldbuzz",
    location: "Badda, Dhaka",
    website: "field.buzz",
    career: "field.buzz/careers",
    email: "hr@field.buzz",
    linkedin: "linkedin.com/company/fieldbuzz",
    contact: null
  },
  {
    name: "Furqan Software",
    location: "Banani, Dhaka",
    website: "furqansoftware.com",
    career: "furqansoftware.com/careers",
    email: "hr@furqansoftware.com",
    linkedin: "linkedin.com/company/furqan-software",
    contact: null
  },
  {
    name: "GeeksSSort",
    location: "Dhaka",
    website: "geekssort.com",
    career: "geekssort.com/career",
    email: "hr@geekssort.com",
    linkedin: "linkedin.com/company/geekssort",
    contact: null
  },
  {
    name: "Genex Infosys Limited",
    location: "Dhaka",
    website: "genexinfosys.com",
    career: "genexinfosys.com/career",
    email: "hr@genexinfosys.com",
    linkedin: "linkedin.com/company/genex-infosys-limited",
    contact: null
  },
  {
    name: "Giga Tech Limited",
    location: "Gulshan, Dhaka",
    website: "gigatechltd.com",
    career: "gigatechltd.com/career",
    email: "hr@gigatechltd.com",
    linkedin: "linkedin.com/company/giga-tech-limited",
    contact: null
  },
  {
    name: "Grit Technologies Limited",
    location: "Kawran Bazar, Dhaka",
    website: "grit0.com",
    career: "grit0.com/careers",
    email: "hr@grit0.com",
    linkedin: "linkedin.com/company/grit-technologies",
    contact: null
  },
  {
    name: "Hogarth Dhaka",
    location: "Banani, Dhaka",
    website: "hogarth.com",
    career: "hogarth.com/careers",
    email: "careers@hogarth.com",
    linkedin: "linkedin.com/company/hogarth-worldwide",
    contact: null
  },
  {
    name: "IBCS-Primax",
    location: "Dhanmondi, Dhaka",
    website: "ibcs-primax.com",
    career: "ibcs-primax.com/career",
    email: "hr@ibcs-primax.com",
    linkedin: "linkedin.com/company/ibcs-primax-software-bangladesh-ltd.",
    contact: null
  },
  {
    name: "IBOS Limited",
    location: "Lalmatia, Dhaka",
    website: "ibos.io",
    career: "ibos.io/career",
    email: "hr@ibos.io",
    linkedin: "linkedin.com/company/ibos",
    contact: null
  },
  {
    name: "iPay",
    location: "Gulshan, Dhaka",
    website: "ipay.com.bd",
    career: "ipay.com.bd/career",
    email: "hr@ipay.com.bd",
    linkedin: "linkedin.com/company/ipay-systems-ltd.",
    contact: null
  },
  {
    name: "IQVIA (Dhaka)",
    location: "Dhaka",
    website: "iqvia.com",
    career: "jobs.iqvia.com",
    email: "careers@iqvia.com",
    linkedin: "linkedin.com/company/iqvia",
    contact: null
  },
  {
    name: "Jatri Services Limited",
    location: "Gulshan, Dhaka",
    website: "jatri.co",
    career: "jatri.co/careers",
    email: "hr@jatri.co",
    linkedin: "linkedin.com/company/jatri",
    contact: null
  },
  {
    name: "Joomshaper",
    location: "Dhaka",
    website: "joomshaper.com",
    career: "joomshaper.com/career",
    email: "hr@joomshaper.com",
    linkedin: "linkedin.com/company/joomshaper",
    contact: null
  },
  {
    name: "Kompass Technologies Limited",
    location: "Gulshan, Dhaka",
    website: "hellokompass.com",
    career: "hellokompass.com/careers",
    email: "hr@hellokompass.com",
    linkedin: "linkedin.com/company/kompass-technologies-limited",
    contact: null
  },
  {
    name: "Magneto Digital",
    location: "Gulshan, Dhaka",
    website: "magnitodigital.com",
    career: "magnitodigital.com/career",
    email: "hr@magnitodigital.com",
    linkedin: "linkedin.com/company/magnito-digital",
    contact: null
  },
  {
    name: "Mazegeek Technologies",
    location: "Banani, Dhaka",
    website: "mazegeek.com",
    career: "mazegeek.com/career",
    email: "hr@mazegeek.com",
    linkedin: "linkedin.com/company/mazegeek",
    contact: null
  },
  {
    name: "Medina Tech Ltd.",
    location: "Dhaka",
    website: "medinatech.co",
    career: "medinatech.co/career",
    email: "hr@medinatech.co",
    linkedin: "linkedin.com/company/medina-tech",
    contact: null
  },
  {
    name: "MonstarLab Bangladesh",
    location: "Dhaka",
    website: "monstar-lab.com/bd",
    career: "monstar-lab.com/bd/career",
    email: "hr@monstar-lab.com",
    linkedin: "linkedin.com/company/monstar-lab-bangladesh",
    contact: null
  },
  {
    name: "Optimizely",
    location: "Dhaka",
    website: "optimizely.com",
    career: "optimizely.com/careers",
    email: "careers@optimizely.com",
    linkedin: "linkedin.com/company/optimizely",
    contact: null
  },
  {
    name: "Orange Toolz",
    location: "Uttara, Dhaka",
    website: "orangetoolz.com",
    career: "orangetoolz.com/career",
    email: "hr@orangetoolz.com",
    linkedin: "linkedin.com/company/orange-toolz",
    contact: null
  },
  {
    name: "Orbitax Bangladesh",
    location: "Dhaka",
    website: "orbitax.com",
    career: "orbitax.com/careers",
    email: "hr@orbitax.com",
    linkedin: "linkedin.com/company/orbitaxbd",
    contact: null
  },
  {
    name: "Penta Global Ltd",
    location: "Gulshan, Dhaka",
    website: "pentabd.com",
    career: "pentabd.com/careers",
    email: "hr@pentabd.com",
    linkedin: "linkedin.com/company/penta-global",
    contact: null
  },
  {
    name: "Portonics Limited",
    location: "Gulshan, Dhaka",
    website: "portonics.com",
    career: "portonics.com/careers",
    email: "hr@portonics.com",
    linkedin: "linkedin.com/company/portonics",
    contact: null
  },
  {
    name: "ReliSource",
    location: "Gulshan, Dhaka",
    website: "relisource.com",
    career: "relisource.com/careers",
    email: "career@relisource.com",
    linkedin: "linkedin.com/company/relisource",
    contact: null
  },
  {
    name: "Sheba Technologies Limited",
    location: "Mohakhali, Dhaka",
    website: "shebatech.com.bd",
    career: "shebatech.com.bd/career",
    email: "hr@shebatech.com.bd",
    linkedin: "linkedin.com/company/sheba-technologies",
    contact: null
  },
  {
    name: "ShellBeeHaken",
    location: "Mirpur, Dhaka",
    website: "shellbeehaken.com",
    career: "shellbeehaken.com/career",
    email: "hr@shellbeehaken.com",
    linkedin: "linkedin.com/company/shellbeehaken",
    contact: null
  },
  {
    name: "Silicon Orchard Limited",
    location: "Mirpur, Dhaka",
    website: "siliconorchard.com",
    career: "siliconorchard.com/career",
    email: "hr@siliconorchard.com",
    linkedin: "linkedin.com/company/silicon-orchard",
    contact: null
  },
  {
    name: "Spring Rain IT",
    location: "Dhaka",
    website: "springrainit.com",
    career: "springrainit.com/career",
    email: "hr@springrainit.com",
    linkedin: "linkedin.com/company/spring-rain",
    contact: null
  },
  {
    name: "SSL Wireless",
    location: "Dhaka",
    website: "sslwireless.com",
    career: "sslwireless.com/career",
    email: "hr@sslwireless.com",
    linkedin: "linkedin.com/company/ssl-wireless",
    contact: null
  },
  {
    name: "Strativ BD Ltd.",
    location: "Dhaka",
    website: "strativ.se/en",
    career: "strativ.se/en/jobs",
    email: "hr@strativ.se",
    linkedin: "linkedin.com/company/strativ",
    contact: null
  },
  {
    name: "SSD-Tech (Systems Solutions & Development Technologies)",
    location: "Gulshan, Dhaka",
    website: "ssd-tech.io",
    career: "ssd-tech.io/career",
    email: "hr@ssd-tech.io",
    linkedin: "linkedin.com/company/ssd-tech",
    contact: null
  },
  {
    name: "TechnoVista Limited",
    location: "Khilkhet, Dhaka",
    website: "technovista.com.bd",
    career: "technovista.com.bd/career",
    email: "hr@technovista.com.bd",
    linkedin: "linkedin.com/company/technovista.bd",
    contact: null
  },
  {
    name: "Vantage Labs",
    location: "Mirpur, Dhaka",
    website: "vantage.com",
    career: "vantage.com/careers",
    email: "hr@vantage.com",
    linkedin: "linkedin.com/company/vantage-labs-dhaka",
    contact: null
  },
  {
    name: "WellDev",
    location: "Baridhara, Dhaka",
    website: "welldev.io",
    career: "welldev.io/careers",
    email: "career@welldev.io",
    linkedin: "linkedin.com/company/welldevintl",
    contact: null
  },
  {
    name: "weDevs Ltd",
    location: "Mirpur, Dhaka",
    website: "wedevs.com",
    career: "wedevs.com/careers",
    email: "hr@wedevs.com",
    linkedin: "linkedin.com/company/wedevs",
    contact: null
  },
  {
    name: "Workspace InfoTech Limited",
    location: "Khilkhet, Dhaka",
    website: "workspaceit.com",
    career: "workspaceit.com/career",
    email: "hr@workspaceit.com",
    linkedin: "linkedin.com/company/workspace-infotech",
    contact: null
  },
  {
    name: "Zaynax Limited",
    location: "Gulshan, Dhaka",
    website: "zaynax.com",
    career: "zaynax.com/career",
    email: "hr@zaynax.com",
    linkedin: "linkedin.com/company/zaynax",
    contact: null
  }
];

const list        = document.getElementById('list');
const countEl     = document.getElementById('count');
const noResults   = document.getElementById('no-results');
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

        <span class="info-label">Contact</span>
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

const items = companies.map(buildItem);
const frag = document.createDocumentFragment();
items.forEach(el => frag.appendChild(el));
list.appendChild(frag);
updateCount(companies.length, companies.length);

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  let visible = 0;
  items.forEach(el => {
    const match = !q || el.dataset.name.includes(q) || el.dataset.location.includes(q);
    el.style.display = match ? '' : 'none';
    if (match) visible++;
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

  companies.forEach((c, i) => {
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
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'just-apply-companies.xml';
  a.click();
  URL.revokeObjectURL(url);
});
