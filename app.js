const companies = [
  {
    name: "Brain Station 23 PLC",
    location: "8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A, Dhaka",
    website: "brainstation-23.com",
    career: "brainstation-23.easy.jobs",
    email: "career@brainstation-23.com",
    linkedin: "linkedin.com/company/brainstation-23; linkedin.com/showcase/brain-station-23-careers-and-culture",
    contact: "linkedin.com/in/timuzin-islam-razit-319899212; linkedin.com/in/tanvir-titu-54254b92; linkedin.com/in/shihabul-kamal-prattay; linkedin.com/in/siyam-hossain-ador-094966157"
  },
  {
    name: "BJIT Limited",
    location: "H-2275, Satarkul, Badda, Dhaka",
    website: "bjitgroup.com",
    career: "bjitgroup.com/career",
    email: "career@bjitgroup.com",
    linkedin: "linkedin.com/company/bjit",
    contact: "linkedin.com/in/tasnia-nazmee-4795601a2; linkedin.com/in/faria-faiema; linkedin.com/in/htanveer23"
  },
  {
    name: "Vivasoft Limited",
    location: "Ahmed Tower (Levels 11, 16, 19), Banani, Dhaka",
    website: "vivasoftltd.com",
    career: "vivasoftltd.com/career",
    email: "contact@vivasoftltd.com",
    linkedin: "linkedin.com/company/vivasoftltd",
    contact: "linkedin.com/in/habiba-momtaz-shathi-"
  },
  {
    name: "Enosis Solutions",
    location: "House 27, Road 8, Gulshan, Dhaka",
    website: "enosisbd.com",
    career: "enosisbd.pinpointhq.com",
    email: "info@enosisbd.com",
    linkedin: "linkedin.com/company/enosis-solutions",
    contact: "linkedin.com/in/md-mushfiqul-haque-8726ba216; linkedin.com/in/moshiur-rahman-mishu"
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
    contact: "linkedin.com/in/saiful-haque-pranta-b63210165; linkedin.com/in/jawwad-rabbi-23995789"
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
    contact: "linkedin.com/in/mamunur-rouf"
  },
  {
    name: "LeadSoft Bangladesh",
    location: "LEADS Tower, M-20,Main Road 1, Section 14, Mirpur, Dhaka",
    website: "leads.com.bd",
    career: "leads.com.bd/current-vacancies",
    email: "info@leads-bd.com",
    linkedin: "linkedin.com/company/leads-corporation-limited",
    contact: "linkedin.com/in/synthia-islam-9872ab204; linkedin.com/in/mahtab-hasan-b6543a77"
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
    contact: "linkedin.com/in/s-m-wasi-sozen-12a8b911a; linkedin.com/in/md-rahat-hayder-chawdhary-emraan-pgdhrm-193243b0; linkedin.com/in/sadia-tasnim1405; linkedin.com/in/shaila-sharmin-0b50ba152; linkedin.com/in/hasibur-rashid-saad; linkedin.com/in/mr-mithu; linkedin.com/in/md-mangur-hossain; "
  },
  {
    name: "Bdtask Limited",
    location: "B-25, Mannan Plaza, Khilkhet, Dhaka",
    website: "bdtask.com",
    career: "bdtask.com/career",
    email: "hr@bdtask.com",
    linkedin: "linkedin.com/company/bdtask",
    contact: "linkedin.com/in/dulal88"
  },
  {
    name: "Dynamic Solution Innovators",
    location: "House 177, Lane 2, New DOHS, Mohakhali, Dhaka",
    website: "dsinnovators.com",
    career: "app.hrythmic.com/recruit/openings/company/dsinnovators/",
    email: "info@dsinnovators.com",
    linkedin: "linkedin.com/company/dsinnovators",
    contact: "linkedin.com/in/farzana-shathi-547247198; linkedin.com/in/salma-fariha-masuda; linkedin.com/in/asif-ahmed-rohan-01bbb0190; linkedin.com/in/nafisha-tafannum-346967200"
  },
  {
    name: "Kona Software Lab",
    location: "Police Plaza Concord (Tower: A), Level: 8, Road: 144, Gulshan-1, Dhaka",
    website: "konasl.com",
    career: "konasl.com/careers",
    email: null,
    linkedin: "linkedin.com/company/konasl",
    contact: "linkedin.com/in/suraiya-akhter-labony; linkedin.com/in/maruf-bin-amjad-9a724920b; linkedin.com/in/md-nafiul-hoque-903a60153"
  },
  {
    name: "ShopUp",
    location: "429–432, Tejgaon I/A, Dhaka",
    website: "shopup.org",
    career: "shopup.org/career",
    email: "hello@shopup.org",
    linkedin: "linkedin.com/company/shopfront-limited",
    contact: "linkedin.com/in/ishtiak-bhuiyan-mehdi; linkedin.com/in/mosaraf-hossain; linkedin.com/in/sadia-sefat-067861202; linkedin.com/in/md-jahidur-rashid-shibly-32721b93; linkedin.com/in/shahriar-alam-864b19150; linkedin.com/in/jayedul-islam-9423721ba"
  },
  {
    name: "Pathao",
    location: "Baro Bhuiyan Genetic Plaza, House# CWN (A) 3A, Lift- 7, Road# 49, Kemal Ataturk Avenue, Gulshan Model Town, Dhaka",
    website: "pathao.com",
    career: "careers.pathao.com",
    email: "support@pathao.com",
    linkedin: "linkedin.com/company/pathao",
    contact: "linkedin.com/in/sadman-ibne-anwar-ba8140161; linkedin.com/in/sumaiya-noor-mumu-632988114; linkedin.com/in/sheikh-shariful-hasan; linkedin.com/in/shaif-rezoan-69a9981bb; linkedin.com/in/md-yeasin-mahmud-51b907248; linkedin.com/in/ghulamsadmanydonny; linkedin.com/in/anamika-zaman-annesha-388238203"
  },
  {
    name: "bKash Limited",
    location: "Shadhinata Tower, 1,Bir Sreshtha Shaheed Jahangir Gate,Dhaka",
    website: "bkash.com",
    career: "bkash.com/career; facebook.com/bkashcareer",
    email: "support@bkash.com",
    linkedin: "linkedin.com/company/bkash-limited/",
    contact: "linkedin.com/in/mazedmakki"
  },
  {
    name: "Chaldal",
    location: "Dhaka",
    website: "chaldal.com",
    career: "chaldal.tech",
    email: 'support@chaldal.com',
    linkedin: "linkedin.com/company/chaldalcom",
    contact: "linkedin.com/in/tanjil-tasin"
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
    contact: "linkedin.com/in/saliksazzad"
  },
  {
    name: "Selise Digital Platform",
    location: "Secure Link Services BD Ltd. Midas Center, H-05, R-16 (New) Dhanmondi,",
    website: "selisegroup.com",
    career: "selisegroup.com/about-us/#selise-career",
    email: "job@selisegroup.com",
    linkedin: "linkedin.com/company/selise; linkedin.com/showcase/selise-careers",
    contact: "linkedin.com/in/nijhum-ghosh; linkedin.com/in/fariza-raida-212a0516b; linkedin.com/in/sumaya-rahman-shimu-285117198; linkedin.com/in/redwan-ahmed-828a49192"
  },
  {
    name: "Nagorik Technologies",
    location: "House 1263, Road 10, Avenue 2, Mirpur DOHS, Dhaka",
    website: "nagorik.tech",
    career: "nagorik.tech/career",
    email: null,
    linkedin: "linkedin.com/company/nagorik-technologies-ltd/",
    contact: "linkedin.com/in/jahan-ara-tasnin"
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
    contact: "linkedin.com/in/aleyapervinleena; linkedin.com/in/tahia25; linkedin.com/in/tasmin-sultana-chaity-6a94b4223"
  },
  {
    name: "Shikho",
    location: "Rangs Paramount, Level 11 Block-K, Plot-11 Rd No 17, Dhaka",
    website: "shikho.com",
    career: 'shikho.freshteam.com/jobs',
    email: "team@shikho.com",
    linkedin: "linkedin.com/company/shikho",
    contact: "linkedin.com/in/piashpaul; linkedin.com/in/shahrin-ahammad-a12850239; linkedin.com/in/ishmamchowdhury; linkedin.com/in/sabiha-afrin-dristy-6638441b3"
  },
  {
    name: "Arogga",
    location: "D/15-1, Road-36, Block-D, Section-10, Mirpur, Dhaka",
    website: "arogga.com",
    career: "arogga.com/jobs",
    email: "info@arogga.com",
    linkedin: "linkedin.com/company/arogga",
    contact: "linkedin.com/in/shaiq17; linkedin.com/in/emdadullah-makki"
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
    contact: "linkedin.com/in/tanjila-akter-304b93178"
  },
  {
    name: "aamra technologies",
    location: "Safura Tower (9th Floor) 20 Kemal Ataturk Avenue, Banani C/A, Dhaka",
    website: "aamra.com.bd",
    career: "people.aamra.com.bd; aamratechnologies.com/career",
    email: "hrod.aamra@aamra.com.bd; recruitment@aamra.com.bd",
    linkedin: "linkedin.com/company/aamracompanies",
    contact: "linkedin.com/in/najmulnns"
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
    contact: "linkedin.com/in/jharna-roy-4b7a3527a"
  },
  {
    name: "Pridesys IT",
    location: "Level 6, 20/21 Garden Road, Kawran Bazar, Dhaka",
    website: "pridesys.com",
    career: "pridesys.com/careers",
    email: "career@pridesys.com",
    linkedin: "linkedin.com/company/pridesys-it-ltd",
    contact: "linkedin.com/in/omar-faruk-52174233; linkedin.com/in/monuwar"
  },
  {
    name: "Ollyo",
    location: "House 1, Patira, Khilkhet, Dhaka",
    website: "ollyo.com",
    career: "ollyo.com/careers",
    email: "hello@ollyo.com",
    linkedin: "linkedin.com/company/ollyo",
    contact: "linkedin.com/in/saima-nusrat-shorna-1290a37a"
  },
  {
    name: "Inument Solution",
    location: "House# 527 (3rd floor), Road# 10 (East), Baridhara DOHS, Dhaka",
    website: "inument.com",
    career: "inument.com/careers/",
    email: "jobs@inument.com",
    linkedin: "linkedin.com/company/inument",
    contact: "linkedin.com/in/fatema-zaman-16274b277; "
  },
  {
    name: "Bondstein Tech",
    location: "138/1 Tejgaon Industrial Area, Tejgaon, Dhaka",
    website: "bondstein.com",
    career: null,
    email: "info@bondstein.com",
    linkedin: "linkedin.com/company/bondstein",
    contact: "linkedin.com/in/anikhossain18/; linkedin.com/in/nafisa-sohana/"
  },
  {
    name: "NGen IT Limited",
    location: "36-37, Probal Housing, Ring Road, Mohammadpur, Dhaka",
    website: "ngenitltd.com",
    career: "ngenitltd.com/jobs",
    email: "sales@ngenitltd.com",
    linkedin: "linkedin.com/company/ngenitltd/",
    contact: "linkedin.com/in/rmehedi"
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
    contact: "linkedin.com/in/sirajul-munir-shanto"
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
    contact: "linkedin.com/in/mdsami55"
  },
  {
    name: "DevsNest",
    location: "24/1 Mirpur Road, Level 10 - Shyamoli Square, Shyamoli, Dhaka",
    website: "devsnest.net",
    career: "devsnest.net/Career; linkedin.com/company/devsnest-llc/jobs",
    email: "hello@devsnest.net",
    linkedin: "linkedin.com/company/devsnest-llc",
    contact: "linkedin.com/in/atikju"
  },
  {
    name: "Appifylab",
    location: "Akhter shoping city, 4th floor, Modina Market, Sylhet",
    website: "appifylab.com",
    career: "appifylab.com/career",
    email: "hr@appifylab.com",
    linkedin: "linkedin.com/company/fastitsolution",
    contact: "linkedin.com/in/masud-rana19; linkedin.com/in/srahmanshafi"
  },
  {
    name: "Appnap Technologies Limited",
    location: "Ranks Business Center (5th Floor), Ka-218/1, Pragati Sarani, Dhaka",
    website: "appnap.io",
    career: "appnap.io/career",
    email: "hello@appnap.io",
    linkedin: "linkedin.com/company/appnap",
    contact: "linkedin.com/in/fbp101; linkedin.com/in/nurulaminreason"
  },
  {
    name: "ATI Limited",
    location: "ATI Centre, House-07, Gareeb-E-Nawaz Avenue, Sector-11, Uttara",
    website: "atilimited.net",
    career: "atilimited.net/career",
    email: "hr@atilimited.net",
    linkedin: "linkedin.com/company/atilimited",
    contact: "linkedin.com/in/sajjad-hossain-b1a966247; linkedin.com/in/md-mizan-hossain-5b671695"
  },
  {
    name: "Augmedix Inc.",
    location: "Rahman’s Regnum Centre (level 15), 191/1, Bir Uttam Mir Shawkat Road, Tejgaon I/A, Dhaka",
    website: "augmedix.com.bd",
    career: "https://jobs.ashbyhq.com/Commure",
    email: "ax-talent-acquisition@commure.com",
    linkedin: "linkedin.com/company/augmedixbangladesh",
    contact: "linkedin.com/in/nomanrashed; linkedin.com/in/aflatunkaisar; linkedin.com/in/mushfiqurarman; linkedin.com/in/iqra-owhee-680488227; linkedin.com/in/mrpreo"
  },
  {
    name: "BRAC IT Services",
    location: "Nafi Tower (Level-13), 53 Gulshan Ave, Dhaka",
    website: "bracits.com",
    career: "bracits.com/career",
    email: "info@bracits.com",
    linkedin: "linkedin.com/company/bracits; linkedin.com/showcase/brac-it-stories",
    contact: "linkedin.com/in/tajrina-khan-hr; linkedin.com/in/istishna-munawara-nijhu-6777b9231; linkedin.com/in/mahmudul-hasan-713a8713a"
  },
  {
    name: "CodersTrust",
    location: "House# 82, Road# 19/A, Block# E, Banani, Dhaka",
    website: "coderstrust.global",
    career: "coderstrust.global/join-us",
    email: "hello@coderstrustbd.com",
    linkedin: "linkedin.com/company/coderstrust-bangladesh",
    contact: "linkedin.com/in/mahzabin-akter"
  },
  {
    name: "Dhrubok Infotech Services",
    location: "Sara Aftab Tower, 29 Ring Rd, Dhaka",
    website: "dhrubokinfotech.com",
    career: "dhrubokinfotech.com/career",
    email: "hr@dhrubokinfotech.com",
    linkedin: "linkedin.com/company/dhrubokinfotech",
    contact: "linkedin.com/in/md-abdul-wadud-7447ab148; linkedin.com/in/ayon115"
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
    contact: "inkedin.com/in/beingebrahim"
  },
  {
    name: "Genex Infosys Limited",
    location: "Nitol Niloy Tower (Level 6-12), Nikunja C/A, Airport Road, Dhaka",
    website: "genexinfosys.com",
    career: "genexinfosys.com/career.php",
    email: "jobs@genexinfosys.com",
    linkedin: "linkedin.com/company/genex-infosys-limited",
    contact: "linkedin.com/in/mkhira; linkedin.com/in/mahi-uddin-0b6145155"
  },
  {
    name: "IBOS Limited",
    location: "6/2 Kazi Nazrul Islam Rd, Dhaka",
    website: "ibos.io",
    career: "ibos.io/career",
    email: "hr@ibos.io",
    linkedin: "linkedin.com/company/iboslimited",
    contact: "linkedin.com/in/mahmud-hasan-abir; linkedin.com/in/sk-moinur-rahman-07"
  },
  {
    name: "IQVIA",
    location: "Remote",
    website: "iqvia.com",
    career: "jobs.iqvia.com",
    email: "careers@iqvia.com",
    linkedin: "linkedin.com/company/iqvia",
    contact: "linkedin.com/in/jubaerferdous"
  },
  {
    name: "Jatri Services Limited",
    location: "Road 24, House 15, Gulshan-02, Dhaka",
    website: "jatri.co",
    career: "jatri.co/career",
    email: "career@jatri.co",
    linkedin: "linkedin.com/company/jatri-app; linkedin.com/showcase/jatri-career",
    contact: "linkedin.com/in/shabiha-yeasmin-chrbp; linkedin.com/in/md-mahamudul-hasan-607b3a228 "
  },
  {
    name: "Magnito",
    location: "House 7, Road 137, Gulshan 1, Dhaka",
    website: "magnito.agency",
    career: "magnito.agency/join-the-cult",
    email: "career@magnito.agency",
    linkedin: "linkedin.com/company/magnito",
    contact: "linkedin.com/in/ishrat-jahan-yoshe"
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
    contact: "linkedin.com/in/sanadina; linkedin.com/in/ariba-ayesha-sattar-60544191; linkedin.com/in/sinthiya-salsabil; linkedin.com/in/kazi-pushpa-ahmed; linkedin.com/in/ashef-zawad"
  },
  {
    name: "Orange Toolz",
    location: "360 Degree house 77, Road 13, Sector 10, Uttara, DHAKA",
    website: "orangetoolz.com",
    career: "career.orangetoolz.com",
    email: "career@orangetoolz.com",
    linkedin: "linkedin.com/company/orangetoolz.com",
    contact: "linkedin.com/in/sabiha-afrin-6329b0391"
  },
  {
    name: "Portonics Limited",
    location: "Navana HR Tower 1, Level 8, Plot - 410, Bir Uttam Mir Showkat Sarak, Tejgaon I/A, Dhaka",
    website: "portonics.com",
    career: "portonics.com/career",
    email: "hr@portonics.com",
    linkedin: "linkedin.com/company/portonics",
    contact: "linkedin.com/in/nabila-tahsin-rimi-4615222ba; linkedin.com/in/ssrahmansadi"
  },
  {
    name: "ReliSource",
    location: "Building# 4A1, Road 139, Gulshan 1, Dhaka 1212",
    website: "relisource.com",
    career: "relisource.com/careers; new.relisource.com/careers/",
    email: "career@relisource.com",
    linkedin: "linkedin.com/company/relisource",
    contact: "linkedin.com/in/ashiqur-rahman-ba1b26197; linkedin.com/in/pranab-saha-63669b41; linkedin.com/in/masumkamal"
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
    contact: "linkedin.com/in/mdsiddiqhasan"
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
    contact: "linkedin.com/in/gazy-yasir-arafat-73069a175; linkedin.com/in/selvester-rozario; linkedin.com/in/sadia-hafeza-jaman-33ab73a5"
  },
  {
    name: "Strativ BD Ltd.",
    location: "Tower, 14, Nakir, 4 Pallabi Rd, Dhaka",
    website: "strativ.se/en",
    career: "strativ.se/en/karriar",
    email: null,
    linkedin: "linkedin.com/company/strativ-ab",
    contact: "linkedin.com/in/nahid-hasan-s9487; linkedin.com/in/romana-naznin28; inkedin.com/in/mim-akter-dola-b68131229"
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
    career: "vantage.com/careers; linkedin.com/company/vantage-labs-llc/jobs",
    email: "info@technovista.com.bd",
    linkedin: "linkedin.com/company/vantage-labs-llc",
    contact: null
  },
  {
    name: "WellDev",
    location: "25th Floor, Ahmed Tower, Kemal Ataturk Ave, Dhaka",
    website: "welldev.io",
    career: "welldev.io/careers",
    email: "recruitment@welldev.io",
    linkedin: "linkedin.com/company/welldevintl",
    contact: "linkedin.com/in/towfiqbd; linkedin.com/in/tasmia-marufa"
  },
  {
    name: "weDevs Ltd",
    location: "House:1005,1007, Avenue:11, Road:09, Dhaka",
    website: "wedevs.com",
    career: "wedevs.com/career",
    email: "hello@wedevs.com",
    linkedin: "linkedin.com/company/wedevs",
    contact: "linkedin.com/in/shakibquraishy; linkedin.com/in/rrajuan"
  },
  {
    name: "Workspace InfoTech Limited",
    location: "House-16, Road-12, (4th floor), Nikunja-2, Khilkhet, Dhaka",
    website: "workspaceit.com",
    career: "workspaceit.com/career",
    email: "hr@workspaceit.com",
    linkedin: "linkedin.com/company/workspace-infotech-limited",
    contact: "linkedin.com/in/aktaruzzamananik"
  },
  {
    name: "ERA-InfoTech Limited",
    location: "Fareast Tower, 35 Topkhana Road, (Level-3), Dhaka",
    website: "erainfotechbd.com",
    career: "https://talent.talent-troop.com/job-list/companies/era",
    email: "marketing@erainfotechbd.com",
    linkedin: "linkedin.com/company/era-infotech-ltd",
    contact: "linkedin.com/in/ashik-hr; linkedin.com/in/naila-hossain-740a61160"
  },
  {
    name: "Gain Solutions",
    location: "Haji Kujrat Ali Mollah Super Market, 6th floor , Mirpur-12, Dhaka",
    website: "gainhq.com",
    career: "career.gainhq.com",
    email: "hello@gainhq.com",
    linkedin: "linkedin.com/company/gainhq-com",
    contact: "linkedin.com/in/shamil-khan-079a6915b; "
  },
  {
    name: "Fiber@Home Ltd",
    location: "House #7/B, Road #13, Gulshan-1, Dhaka",
    website: "fiberathome.net",
    career: "fiberathome.net/career",
    email: "jobs@fiberathome.net",
    linkedin: "linkedin.com/company/FiberAtHomeLimited",
    contact: "linkedin.com/in/sayma-delower-2049877b; linkedin.com/in/mustaquim-rahman-chowdhury-4049181a5; linkedin.com/in/himi-maria-csca™-60a64b1a6; linkedin.com/in/rakibul-hasan-hr"
  },
  {
    name: "Nagad",
    location: "Delta Dahlia Tower (Level 13 and 14), 36 Kemal Ataturk Avenue, Banani, Dhaka",
    website: "nagad.com.bd",
    career: "nagad.com.bd/career",
    email: "recruitment@nagad.com.bd",
    linkedin: "linkedin.com/company/mynagad; linkedin.com/company/nagad-people-culture",
    contact: "linkedin.com/in/smitaaparna; linkedin.com/in/toma3599; linkedin.com/in/sohanur-rahman-du"
  },
  {
    name: "Upay",
    location: "Plot CWS (A) -1, Road 34, Gulshan Avenue, Dhaka",
    website: "upaybd.com",
    career: null,
    email: "info@upaybd.com",
    linkedin: "linkedin.com/company/upay-ucbfintech",
    contact: "linkedin.com/in/arpon-saha-635b27146; linkedin.com/in/adnan1813"
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
    contact: "linkedin.com/in/thisissufian"
  },
  {
    name: "Mediusware",
    location: "24/1, Taj Mahal Road, Shiya Masjid mor, Floor - 8th & 9th, Ring Road, Dhaka",
    website: "mediusware.com",
    career: "mediusware.com/career",
    email: "hr@mediusware.com",
    linkedin: "linkedin.com/company/mediusware",
    contact: "linkedin.com/in/faysal97"
  },
  {
    name: "TallyKhata",
    location: "Banani, Dhaka",
    website: "tallykhata.com",
    career: null,
    email: "careers@tallykhata.com",
    linkedin: "linkedin.com/company/tallykhata",
    contact: "linkedin.com/in/hasan-rinku; linkedin.com/in/antora-hayat-khan-938a18399"
  },
  {
    name: "Shadhin Lab",
    location: "Riajbag, Road-6, Rampura, Dhaka",
    website: "shadhinlab.com",
    career: "shadhinlab.com/career",
    email: "career@shadhinlab.com",
    linkedin: "linkedin.com/company/shadhin-lab-llc",
    contact: "linkedin.com/in/md-ashikul-islam22; linkedin.com/in/hasanur"
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
    contact: "linkedin.com/in/tauhid-ahmed-5407a221a; linkedin.com/in/saquib-ali-k-271589a5"
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
    contact: ".linkedin.com/in/fakriamostafiz"
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
    contact: "linkedin.com/in/proma-saha07; linkedin.com/in/kazi-safaet-mahmud-auvi; inkedin.com/in/mosammad-khadija-68087859"
  },
  {
    name: "Reckitt Benckiser PLC",
    location: "The Glass House, 9th & 10th Floors, Plot-2, Block-SE (B), 38 Gulshan Avenue, Dhaka",
    website: "reckitt.com",
    career: "reckitt.com/careers; linkedin.com/company/reckitt/jobs; careers.reckitt.com/job",
    email: null,
    linkedin: "linkedin.com/company/reckitt",
    contact: "linkedin.com/in/salman22"
  },

  {
    name: "ADN DigiNet",
    location: "House: 11, Navana Shefali, Road: 14, Gulshan-1, Dhaka",
    website: "adndiginet.com",
    career: "adndiginet.com/career",
    email: "career@adndiginet.com",
    linkedin: "linkedin.com/company/adndiginet",
    contact: "linkedin.com/in/sohael-reza-4a5b8b22; linkedin.com/in/enamul-hassan-01521/; linkedin.com/in/outstrip/; linkedin.com/in/ferose-al-mamun-rony-69a478107/"
  },

  {
    name: "OnnoRokom Projukti Limited",
    location: "Tropical Noor Tower (Level-3), 40 Kazi Nazrul Islam Avenue, Karwan Bazar, Dhaka",
    website: "onnorokomprojukti.com",
    career: "onnorokomprojukti.com/Career",
    email: "info@onnorokomprojukti.com",
    linkedin: "linkedin.com/company/onnorokom-projukti-limited",
    contact: "linkedin.com/in/momenul-islam-hrd"
  },
  {
    name: "WPP Production",
    location: "Road 11, House 76/A, 3rd Floor, Banani, Dhaka",
    website: "wppproduction.com",
    career: "wpp.com/careers",
    email: "careers@wppproduction.com",
    linkedin: "linkedin.com/company/wppproductiondhaka",
    contact: "linkedin.com/in/faaria-tabassum-aniqa; linkedin.com/in/bushra-muquith"
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
    contact: "linkedin.com/in/md-mashrur-rahman-hr"
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
    contact: "linkedin.com/in/tania-islam-b26635157"
  },
  {
    name: "Bangladesh Software Solution",
    location: "House No: 95, Floor: 1st(A1), Road 9/A, Dhanmondi, Dhaka",
    website: "bssoln.com",
    career: "bssoln.com/careers/",
    email: "info@bssoln.com; bssolnjobs@gmail.com",
    linkedin: "linkedin.com/company/bangladesh-software-solution",
    contact: "linkedin.com/in/asheq-mazib-95a86b34a/"
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
    contact: "linkedin.com/in/rashidul-hasan-hr"
  },
  {
    name: "Synesis IT",
    location: "Level 2 & 3, BDBL Bhaban, 12 Kawran Bazar, Dhaka",
    website: "synesisit.com.bd",
    career: null,
    email: "info@synesisit.com.bd",
    linkedin: "linkedin.com/company/synesis-it-limited",
    contact: "linkedin.com/in/abdullah-galib"
  },
  {
    name: "Caretutors Technologies Ltd.",
    location: "Level 2, Rangs Naharz, House 14, Road Shahjalal Avenue, Sector 4, Uttara, Dhaka",
    website: "caretutors.com",
    career: null,
    email: "career@caretutors.com",
    linkedin: "linkedin.com/company/care-tutors",
    contact: "linkedin.com/in/sumaiya-ahmed-58334b1ba"
  },
  {
    name: "Be Data Solutions",
    location: "18/3 (3rd Floor), Ring Road, Block F, Mohammadpur, Dhaka",
    website: "bedatasolutions.com",
    career: null,
    email: "recruitment@bedatasolutions.com",
    linkedin: "linkedin.com/company/be-data-solutions",
    contact: "linkedin.com/in/shofiulalom; linkedin.com/in/rifat-sultana-2b1478339"
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
    contact: "linkedin.com/in/tahrin-ahmed-103a0214a; linkedin.com/in/shohanur-rahman-340275102; linkedin.com/in/asmunna9"
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
    linkedin: "linkedin.com/company/rokomari-com",
    contact: "linkedin.com/in/sajia-jahan-sinha; linkedin.com/in/tanzim-ahmed-4b8770109"
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
    contact: "linkedin.com/in/ahasanulhoque; linkedin.com/in/mahjabeen-syed-b80817156; linkedin.com/in/anik-istiaque-01b433174"
  },
  {
    name: "EchoaSoft Ltd.",
    location: "House 01, Road No. 01, Nikunja-2, Khilkhet, Dhaka",
    website: "echoasoft.com",
    career: "echoasoft.com/career",
    email: "info@echoasoft.com",
    linkedin: "linkedin.com/company/echoasoft",
    contact: "linkedin.com/in/afsana-rifat"
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
    contact: "linkedin.com/in/fatin-ishraq-59031a14b"
  },
  {
    name: "Exabyting",
    location: "A#4, House# 470, Road# 31, Mohakhali DOHS, Dhaka",
    website: "exabyting.com",
    career: "life.exabyting.com",
    email: "candidate.connect@exabyting.com",
    linkedin: "linkedin.com/company/life-at-exabyting; linkedin.com/company/exabyting",
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
    contact: "linkedin.com/in/esnrrahman"
  },
  {
    name: "Truck Lagbe",
    location: "House 221 (2nd Floor), Road 15, Mohakhali DOHS, Dhaka",
    website: "trucklagbe.com",
    career: "trucklagbe.com/career",
    email: "career@trucklagbe.com",
    linkedin: "linkedin.com/company/trucklagbe",
    contact: "linkedin.com/in/kaisar-ahmed-majumder; linkedin.com/in/dedarul-islam-rana"
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
    contact: "linkedin.com/in/nabil-khan-07192a34b; linkedin.com/in/k-m-iftakhar-islam-ifty-777279219"
  },
  {
    name: "MiraiLit Ltd.",
    location: "102/B, Chowdhuripara, Malibagh, Dhaka",
    website: "mirailit.com",
    career: "mirailit.aplicaro.com",
    email: "contact@mirailit.com",
    linkedin: "linkedin.com/company/mirailit",
    contact: "linkedin.com/in/shajidhassan"
  },
  {
    name: "Efoli",
    location: "Mirpur DOHS, Dhaka",
    website: "efoli.com",
    career: "efoli.com/career",
    email: "info@efoli.com",
    linkedin: "linkedin.com/company/efoli",
    contact: "linkedin.com/in/jahangir83"
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
    contact: "linkedin.com/in/rafia-hafiz-837811158; linkedin.com/in/syedhasan88"
  },
  {
    name: "Ontik Technology",
    location: "3rd Floor, House 11B, Road 30 Gulshan Ave, Dhaka",
    website: "ontiktechnology.com",
    career: "ontiktechnology.com/career",
    email: "info@ontiktechnology.com",
    linkedin: "linkedin.com/company/ontiktechnology",
    contact: "linkedin.com/in/hmsarwar; linkedin.com/in/ishrat-jahan-sara-06730a1b8"
  },
  {
    name: "Coderex",
    location: "Level 12B, 69/1 Chandrashila Suvastu Tower, Panthapath, Dhaka",
    website: "coderex.co",
    career: "inside.coderex.co/jobs",
    email: "enquiry@coderex.co",
    linkedin: "linkedin.com/company/coderex-ltd",
    contact: "linkedin.com/in/tarequl-islam-khan-254b64151"
  },
  {
    name: "Traideas",
    location: "6/2, S. S Alam Khandaker Road, Masdair, Narayanganj",
    website: "traideas.com",
    career: null,
    email: "info@traideas.com",
    linkedin: "linkedin.com/company/traideas",
    contact: "linkedin.com/in/limonsafayet; linkedin.com/in/istiak227"
  },
  {
    name: "NextLab",
    location: "Level 9, Chandrashila Suvastu Tower, 69/1 Panthapath, Dhaka",
    website: "wenextlab.com",
    career: "wenextlab.com/careers",
    email: "hello@wenextlab.com",
    linkedin: "linkedin.com/company/wenextlab",
    contact: "linkedin.com/in/asaduzzaman-sohan-927241287; linkedin.com/in/tania-tuli-22b242299"
  },
  {
    name: "CSM Bangladesh Limited",
    location: "House#13 (1st to 7th floor), Road#05, Sector#16/A, Uttara, Dhaka",
    website: "csmbangladesh.com",
    career: "linkedin.com/company/csm-bangladesh/jobs",
    email: "hr@csmbangladesh.com",
    linkedin: "linkedin.com/company/csm-bangladesh",
    contact: null
  },
  {
    name: "CarryBee",
    location: "97, Sohrawardy Ave, Baridhara Diplomatic Zone, Dhaka",
    website: "carrybee.com",
    career: "carrybee.com/careers-listing",
    email: "info@carrybee.com",
    linkedin: "linkedin.com/company/carrybee",
    contact: "linkedin.com/in/fairuzislamrazin; linkedin.com/in/mahedihassanbup; linkedin.com/in/fahim-rahman-6b67b0368; linkedin.com/in/ahmed-tajbid-momtaz; linkedin.com/in/shaheenkim"
  },
  {
    name: "Chardike",
    location: "Floor 11 (Lift 10), 163-164, Sonargaon Road, Hatirpool, Dhaka",
    website: "chardike.com",
    career: null,
    email: "career@chardike.com",
    linkedin: "linkedin.com/company/chardike",
    contact: "linkedin.com/in/tanvirul-haque-58a2a51a3; linkedin.com/in/md-emran-hossain-12844b1a9"
  },
  {
    name: "WPXPO",
    location: "House No. 1/C, Road No. 1, Shyamoli, Dhaka",
    website: "wpxpo.com",
    career: "www.wpxpo.com/career",
    email: "career@wpxpo.com",
    linkedin: "linkedin.com/company/wpxpohq",
    contact: "linkedin.com/in/mohshin-imam-pranto-982343247"
  },
  {
    name: "Startise",
    location: "House 592, Avenue 05, Road 08, Mirpur DOHS, Pallabi, Dhaka",
    website: "startise.com",
    career: "startise.com/careers",
    email: "info@startise.com",
    linkedin: "linkedin.com/company/startisetech",
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
    contact: "linkedin.com/in/musabbirul-alam"
  },
  {
    name: "Link3 Technologies Ltd.",
    location: "Police Plaza Concord, 13th Floor, Plot-02, Road-144, Gulshan-1, Dhaka",
    website: "link3.net",
    career: "link3.net/career",
    email: "jobs@link3.net; info@link3.net",
    linkedin: "linkedin.com/company/link3-technologies",
    contact: "linkedin.com/in/toufiqul-islam-630247119; linkedin.com/in/rafeya-sharmin-05777318b; linkedin.com/in/jarin-anjum-chowdhury-8a3a3414b"
  },
  {
    name: "W3 Engineers Ltd.",
    location: "World Business Centrum, 4th Floor, 76/A, Banani-11, Dhaka",
    website: "w3engineers.com",
    career: "w3engineers.com/career",
    email: "jobs@w3engineers.com",
    linkedin: "linkedin.com/company/w3engineers",
    contact: "linkedin.com/in/jannatulferdousjui"
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
    email: "hr@6sensehq.com",
    linkedin: "linkedin.com/company/6sensehq",
    contact: "linkedin.com/in/shadman-kabir-sarker-091a70203/; linkedin.com/in/nahidtasneem/; linkedin.com/in/tahmeed-ahmed-0005031ab/"
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
    contact: "linkedin.com/in/biyas-roy-halder-7376841b2; linkedin.com/in/nahian-akib-7a468a137"
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
    contact: "linkedin.com/in/tuhinrakib; linkedin.com/in/sakib-hr; linkedin.com/in/sadia-momtaz-b1b795247"
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
    contact: "linkedin.com/in/fazle-rabbi-ador"
  },
  {
    name: "JustGo Technologies",
    location: "Rupayan Trade Center (8th floor) 114, Kazi Nazrul Islam Avenue, Bangla Motor, Dhaka",
    website: "justgo.com",
    career: "justgo.com/careers",
    email: "support@justgo.com",
    linkedin: "linkedin.com/company/JustGoTechnologies",
    contact: "linkedin.com/in/humayankabirrr; linkedin.com/in/kazi-ayesha-rahman-21606a13a; "
  },
  {
    name: "AdPlay Technology",
    location: "Plot-114, Level-4, Block-E, Road- 12, Banani, Dhaka",
    website: "adplaytechnology.com",
    career: "linkedin.com/company/adplay-mobile/jobs",
    email: "hello@adplay-mobile.com",
    linkedin: "linkedin.com/company/adplay-mobile",
    contact: "linkedin.com/in/nazah-saiyara-ahmed-99b9b5184/; linkedin.com/in/ahammed-jaki-ongon-652a4422a/"
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
    contact: "linkedin.com/in/saim-ur-rahman; linkedin.com/in/ashraful-goni-35aba4201; linkedin.com/in/ahnaf-shamit-ulab; linkedin.com/in/nadia-islam-aksha-182a751b1"
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
    contact: "linkedin.com/in/samia-rahman-24660517b"
  },
  {
    name: "Stardust Telecom Limited",
    location: "Awal Center (18th Floor), 34, Kemal Ataturk Avenue, Banani, Dhaka",
    website: "mimebd.com",
    career: null,
    email: "talentdesk.celstl@cg-bd.com",
    linkedin: "linkedin.com/company/stardust-telecom-ltd",
    contact: null
  },
  {
    name: "SAJIDA Foundation",
    location: "OTOBI Center, Plot 12, Block CWS(C), Gulshan South Avenue, Gulshan 1, Dhaka",
    website: "sajida.org",
    career: "career.sajida.org",
    email: "inquiry@sajida.org",
    linkedin: "linkedin.com/company/sajida-foundation",
    contact: "linkedin.com/in/mahmudulmohsin; linkedin.com/in/mdnomanuzzaman; "
  },
  {
    name: "COdesign",
    location: "Rangs Paramount Square, Level-8, Plot 11, Road 17, Banani C/A, Dhaka",
    website: "co.design",
    career: "co.design/careers",
    email: "connect@co.design",
    linkedin: "linkedin.com/company/codesigntheory",
    contact: null
  },
  {
    name: "Augmex Technologies",
    location: "House: 01, Road: 12, Baridhara J Block, Dhaka",
    website: "augmex.io",
    career: "augmex.io/careers",
    email: "career@augmex.io",
    linkedin: "linkedin.com/company/scalewithaugmex",
    contact: "linkedin.com/in/s-m-syful-islam-bb2684b0; linkedin.com/in/sanzida-sharmin"
  },
  {
    name: "Tech Cloud Ltd",
    location: "House 379, Road 6, Baridhara DOHS, Dhaka",
    website: "techcloudltd.com",
    career: "techcloudltd.com/career-at-tech-cloud-ltd",
    email: "hr@techcloudltd.com",
    linkedin: "linkedin.com/company/tech-cloud-ltd",
    contact: "linkedin.com/in/kazihasanmahmud"
  },
  {
    name: "Suffix IT Limited",
    location: "Cha-70,70/A, Rupayan Millennium Square (9A), Progoti Sharoni, North Badda, Gulshan, Dhaka",
    website: "suffixit.com",
    career: "suffixit.com/career; linkedin.com/company/suffix-it-limited/jobs",
    email: "career@suffixit.com",
    linkedin: "linkedin.com/company/suffix-it-limited",
    contact: "linkedin.com/in/rafiat-rabi-596423218"
  },
  {
    name: "Get Levrg Bangladesh Ltd",
    location: "Apartment: A3, Plot No Suvastu Batayan, House 12, Road No 6, Banani, Dhaka",
    website: "getlevrg.com",
    career: "career.getlevrg.com",
    email: null,
    linkedin: "linkedin.com/company/get-levrg-bd",
    contact: null
  },
  {
    name: "Linno",
    location: "Level 12B, 69/1 Chandrashila Suvastu Tower, Panthapath, Dhaka",
    website: "linno.io",
    career: "linno.io/careers",
    email: "enquiry@linno.io",
    linkedin: "linkedin.com/company/linnoltd",
    contact: "linkedin.com/in/tarequl-islam-khan-254b64151"
  },
  {
    name: "Backspace",
    location: "5th Floor, 169, Amir Tower, West Jurain, Dholairpar, Dhaka.",
    website: "werbackspace.com",
    career: "werbackspace.com/career",
    email: "career@werbackspace.com",
    linkedin: "linkedin.com/company/werbackspace",
    contact: "linkedin.com/in/aminahmedmisal07; linkedin.com/in/snmorshed"
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
    contact: "linkedin.com/in/zahiidul-islam; linkedin.com/in/akmfaisalhaque; linkedin.com/in/barna960; linkedin.com/in/maimuna-suchona"
  },
  {
    name: "Intelligent Machines",
    location: "Moar Banani 11, Ventura Iconia, Level 3, Holding 37 Road No. 11, Block H, Dhaka",
    website: "intelmachines.ai",
    career: null,
    email: "foysal@intelmachin.es",
    linkedin: "linkedin.com/company/intelligent-machines-ltd",
    contact: "linkedin.com/in/foysal-hosen"
  },
  {
    name: "Kite Games Studio Ltd.",
    location: "283, Road 19/C, Mohakhali DOHS, Dhaka",
    website: "kitegamesstudio.com",
    career: "kitegamesstudio.com",
    email: "career@kitegamesstudio.com",
    linkedin: "linkedin.com/company/kite-games-studio",
    contact: "linkedin.com/in/jharna-rahman-69ab95155"
  },
  {
    name: "Shuttle",
    location: "Road 2, Block B, Niketon Housing Society, Gulshan 1, Dhaka",
    website: "shuttlebd.com",
    career: null,
    email: "info@shuttlebd.com",
    linkedin: "linkedin.com/company/shuttlebd",
    contact: "linkedin.com/in/jawwad-jahangir-73339a87"
  },
  {
    name: "HubXpert",
    location: "Flat A7, H-889, Bashundhara Apollo Road, Dhaka",
    website: "hubxpert.com",
    career: "career.hubxpert.com/hubxpert-application-form; linkedin.com/company/hubxpert/jobs/; career.hubxpert.com/join-us",
    email: "hr@hubxpert.com",
    linkedin: "linkedin.com/company/hubxpert",
    contact: "linkedin.com/in/mdtonmoy"
  },
  {
    name: "BRACNet Limited",
    location: "Navana Yusuf Infinity (Level-7), 16 Mohakhali C/A, Dhaka",
    website: "bracnet.net",
    career: "bracnet.net/career/vacancies",
    email: "support@bracmail.net",
    linkedin: "linkedin.com/company/bracnet-limited",
    contact: "linkedin.com/in/afrin-kawsar; linkedin.com/in/rashidul-hasan-mahim-b82b67295"
  },
  {
    name: "Wegro Global",
    location: "House 42, Road 1, Block A, Niketon, Gulshan, Dhaka",
    website: "wegro.global",
    career: "wegro.global/career",
    email: "career@wegro.global",
    linkedin: "linkedin.com/company/wegro-global",
    contact: "linkedin.com/in/mdmoniruzzamanrobin"
  },
  {
    name: "Patricius IT",
    location: "(2nd Floor) Hit Hasina Complex, Chanmari Road, Lalkhan Bazar, Chattogram",
    website: "patriciusit.com",
    career: "patriciusit.com/job-opportunities/",
    email: "contact@patriciusit.com",
    linkedin: "linkedin.com/company/patricius-it",
    contact: "linkedin.com/in/naeema-alam; "
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
    contact: "linkedin.com/in/mohammad-yamin-949055339"
  },
  {
    name: "Bahon Limited",
    location: "Star Center, 2nd Floor, Road-138, Block-SE(C), Plot-2, Gulshan Avenue, Gulshan-1, Dhaka",
    website: "bahon.com",
    career: null,
    email: "jobs@bahon.com",
    linkedin: "linkedin.com/company/bahon-limited",
    contact: "linkedin.com/in/zannatulferdousi; linkedin.com/in/sifat-binta-alam-b883361bb"
  },
  {
    name: "Cartup Ltd.",
    location: "Rahman's Regnum Center, Level-6, 191/1, Tejgaon-Gulshan Link Road, Tejgaon C/A, Dhaka",
    website: "cartup.com",
    career: "lnkd.in/gudvwEhR",
    email: "customer.care@cartup.com",
    linkedin: "linkedin.com/company/cartup-bangladesh; linkedin.com/company/cartup-careers",
    contact: "linkedin.com/in/sabrina-saila8181; linkedin.com/in/hasan-mahmud-samrut-626574170; linkedin.com/in/tahamid"
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
    contact: "linkedin.com/in/tarinprapty/"
  },
  {
    name: "SuperAnnotate",
    location: "149 New Montgomery St, 4th Floor, San Francisco, CA 94105, USA",
    website: "superannotate.com",
    career: "superannotate.com/careers; linkedin.com/company/superannotate/jobs",
    email: null,
    linkedin: "linkedin.com/company/superannotate",
    contact: "linkedin.com/in/iamazaz; linkedin.com/in/fatima-zohora"
  },
  {
    name: "Miaki",
    location: "House 11/A, Road 99, Momtaz Vision, Flat B-2, Gulshan 02, Dhaka",
    website: "miaki.co",
    career: "miaki.co/miaki_career",
    email: "info@miaki.co",
    linkedin: "linkedin.com/company/miaki",
    contact: "linkedin.com/in/md-israt-shamim; linkedin.com/in/munnujan-aktar-pranty-3904701b0; linkedin.com/in/mi-anik"
  },
  {
    name: "Quantanite",
    location: "CRP Building, Mirpur 14, Dhaka",
    website: "quantanite.com",
    career: "careers.quantanite.com",
    email: "recruitmentaquantanite.com",
    linkedin: "linkedin.com/company/quantanite",
    contact: "linkedin.com/in/koushik-azim; linkedin.com/in/mirfat-uz-z-4369a579; linkedin.com/in/kazi-mujtoba-shahria-b4054b1a7"
  },
  {
    name: "PriyoShop",
    location: "31/A Dhanmondi-8, Dhaka",
    website: "priyoshopretail.com",
    career: "priyoshopretail.com/career/",
    email: "career@priyoshop.com",
    linkedin: "linkedin.com/company/priyoshopcom",
    contact: "linkedin.com/in/ree-riha-666b83301; linkedin.com/in/sanjida-akter-faiza-74449026b; "
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
    contact: "linkedin.com/in/arif-ridhoy-8b3426141; linkedin.com/in/mamunur-rahman1; linkedin.com/in/tanjum-tisha; linkedin.com/in/md-deluar-hossain-robin-92b785247; linkedin.com/in/md-shahriar-hossain777; linkedin.com/in/saiful-islam-3625331b9; linkedin.com/in/a-s-m-saifullah-saif-996b343a; linkedin.com/in/md-jubeare-asif-rushod-230a8a213"
  },
  {
    name: "foodpanda",
    location: "Level: 8, Navana pritsin, 128 Gulshan Avenue, Dhaka",
    website: "foodpanda.com.bd",
    career: "careers.foodpanda.com/bangladesh; linkedin.com/company/foodpanda/jobs",
    email: null,
    linkedin: "linkedin.com/company/foodpanda",
    contact: "linkedin.com/in/s-m-shohidul-islam-b2378377"
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
  {
    name: "Codemen Solutions Limited",
    location: "90/B, Uttara bank building (4th floor), Malibagh Chowdhury Para, 1219 DIT Rd, Dhaka",
    website: "codemen.com",
    career: null,
    email: "info@codemen.com",
    linkedin: "linkedin.com/company/codemen-solutions-inc-",
    contact: "linkedin.com/in/golammurshed"
  },
  {
    name: "ding",
    location: "6 Kemal Ataturk Ave, Dhaka",
    website: "ding.com",
    career: "company.ding.com/careers",
    email: "HR@ding.com",
    linkedin: "linkedin.com/company/ding-com",
    contact: null
  },
  {
    name: "Nimble",
    location: "House - 1, Road - 36, Gulshan - 2, Dhaka",
    website: "nimblesl.com",
    career: "nimblesl.com/careers",
    email: "career@nimblesl.com; hr@nimblesl.com",
    linkedin: "linkedin.com/company/nimble-software-lab",
    contact: "linkedin.com/in/aniklavida"
  },
  {
    name: "Dohatec",
    location: "Doha House 43 Purana Paltan Line Dhaka",
    website: "dohatec.com",
    career: "dohatec.com/careers",
    email: "hrd@dohatec.net",
    linkedin: "linkedin.com/company/dohatec-new-media",
    contact: null
  },
  {
    name: "Genuine Technology & Research Ltd.",
    location: "Chittagong & Dhaka, Bangladesh",
    website: "gtrbd.com",
    career: null,
    email: "hr02@gtrbd.com",
    linkedin: "linkedin.com/company/genuine-technology-&-research-ltd-",
    contact: "linkedin.com/in/engrabuhena"
  },
  {
    name: "Implevista",
    location: "3/11 Humayan Road, 4th floor. Mohammadpur, Dhaka",
    website: "implevista.com",
    career: "implevista.com/career",
    email: " hr@implevista.com",
    linkedin: "linkedin.com/company/implevista",
    contact: null
  },
  {
    name: "Talent Pro",
    location: "109 Masjid Road, Old DOHS, Banani, Dhaka",
    website: "talentpro.global",
    career: null,
    email: "info@talentpro.global; hannan@talentpro.global",
    linkedin: "linkedin.com/company/talentproglobal",
    contact: "linkedin.com/in/mdhannanhossain"
  },
  {
    name: "GoZayaan",
    location: "Sheltech Ayaan, House 58, Road 6 & 11, Block C, Level 2, Banani, Dhaka",
    website: "gozayaan.com",
    career: "gozayaan.com/talent",
    email: "info@gozayaan.com",
    linkedin: "linkedin.com/company/gozayaanlimited",
    contact: "linkedin.com/in/nafisa-anjoom; linkedin.com/in/maria-nazifa"
  },
  {
    name: "ShareTrip",
    location: "3rd Floor, House 1, Road 17, Block C, Banani, Dhaka ",
    website: "sharetrip.net",
    career: null,
    email: "info@gozayaan.com",
    linkedin: "linkedin.com/company/sharetrip",
    contact: null
  },
  {
    name: "Ray Advertising",
    location: "Beside Kali Mandir 2nd Floor, Chondon - Baisha Road, Bogura",
    website: "rayadvertising.com",
    career: "rayadvertising.com/careers",
    email: "contact@rayadvertising.com; info@rayadvertising.com",
    linkedin: "linkedin.com/company/rayadvertising",
    contact: "linkedin.com/in/nuzhat-lamisa-a-901530171; linkedin.com/in/tahmid-bin-monowar; linkedin.com/in/shakila-parvin-tripty-67411ab9; linkedin.com/in/saqlain-siddiqui-332bb2218; linkedin.com/in/salman-mahmud-doha; linkedin.com/in/syed-aqm-aktaruzzaman-shrm-pgdhrm-hrmc-pmd-pro-slii-hay-48945434"
  },
  {
    name: "Appinion BD",
    location: "OTOBI Center, 4th floor, plot 12, Block CWS(C), Gulshan South Avenue, Gulshan 1, Dhaka",
    website: "appinionbd.com",
    career: "appinionbd.com/career/life-at-appinion",
    email: "career@appinionbd.com",
    linkedin: "linkedin.com/company/appinionbd",
    contact: "linkedin.com/in/mumtahina-islam-nuff-b97355361"
  },
  {
    name: "BlueBird Interactive",
    location: "32/1,Road No : 3, Shamoly, Mirpur Road, Dhaka",
    website: "blubirdinteractive.com",
    career: null,
    email: "career@blubirdinteractive.com",
    linkedin: "linkedin.com/company/blubird-interactive",
    contact: "linkedin.com/in/themh; linkedin.com/in/kazishahin"
  },
  {
    name: "QA Harbor",
    location: "Level 3, House No. 470, Road No. 31, Mohakhali DOHS, Dhaka",
    website: "qaharbor.com",
    career: "qajobs.qaharbor.com",
    email: "contact@qaharbor.com",
    linkedin: "linkedin.com/company/qa-harbor",
    contact: null
  },
  {
    name: "Echologyx",
    location: "Siam Tower, Plot 15, Floor 13, Dhaka",
    website: "echologyx.com",
    career: "echologyx.com/career",
    email: "jobs@echologyx.com",
    linkedin: "linkedin.com/company/echologyx",
    contact: "linkedin.com/in/shirajum-monira-muna-53b9b91a5; linkedin.com/in/tahleela-hasan-44ba46146; linkedin.com/in/md-shams-zad-al-islam-3b655966; linkedin.com/in/zannatun-nayeem-58431261"
  },
  {
    name: "EliteLab AI",
    location: "143, Crescent Road, Dhanmondi, Dhaka",
    website: "elitelab.ai",
    career: "elitelab.ai/open-positions",
    email: "hr@elitelab.ai",
    linkedin: "linkedin.com/company/elite-lab-ai",
    contact: null
  },
  {
    name: "InfiniteBit",
    location: "8th Floor, 39/A New Eskaton Road, Dhaka",
    website: "infinitibit.com",
    career: null,
    email: "career@infinitibit.com",
    linkedin: "linkedin.com/company/infinitibit; linkedin.com/showcase/infinitibit-talent-culture",
    contact: "linkedin.com/in/aparajita-barua; linkedin.com/in/md-tanzir-hossain"
  },
  {
    name: "RazinSoft",
    location: "RMR Center 1/1 (A&B) Shamoli Ring Road, Dhaka",
    website: "razinsoft.com",
    career: null,
    email: "career@razinsoft.com",
    linkedin: "linkedin.com/company/razinsoft",
    contact: null
  },
  {
    name: "BongoBD",
    location: "Baridhara J Block, House 20 Rd No. 2/B, Dhaka",
    website: "bongobd.com",
    career: null,
    email: "careers@bongobd.com",
    linkedin: "linkedin.com/company/bongobd",
    contact: null
  },
  {
    name: "DreamOnline",
    location: "Address #1: House #72, Road #3, Block - B, Niketan, Gulshan - 1, Dhaka",
    website: "dreamonline.com.bd",
    career: "dreamonline.com.bd/career",
    email: null,
    linkedin: "linkedin.com/company/dreamonline-limited",
    contact: null
  },
  {
    name: "Luminous Labs",
    location: "House 761/A, Road 11, Avenue 6, Mirpur DOHS, Dhaka",
    website: "luminouslabsbd.com",
    career: "luminouslabsbd.com/career",
    email: "hr@luminouslabsbd.com",
    linkedin: "linkedin.com/company/luminouslabsbd",
    contact: null
  },
  {
    name: "Fiftytwo Digital",
    location: "House building, Sonargaon Janapath Rd, Dhaka",
    website: "fiftytwodigital.com",
    career: "fiftytwodigital.com/careers",
    email: "contact@fiftytwo.com",
    linkedin: "linkedin.com/company/fiftytwo-digital",
    contact: null
  },
  {
    name: "Nifty Coders",
    location: "House-10 (1st Floor), Road-19/A, Block-E, Banani, Dhaka",
    website: "niftycoders.com",
    career: "https://careers.smartrecruiters.com/NiftyCodersPvtLtd/; linkedin.com/company/nifty-coders/jobs",
    email: "hello@niftycoders.com",
    linkedin: "linkedin.com/company/nifty-coders",
    contact: "linkedin.com/in/amatur-lushan-46043518b"
  },
  {
    name: "GAO (Global Advanced Operations) Tek Inc",
    location: "36 Dilkusha Rd, Motijheel, Dhaka",
    website: "bd.gaotek.com",
    career: "bd.gaotek.com/careers/",
    email: "Hire-Bangladesh-A@thegaogroup.com",
    linkedin: "linkedin.com/company/gao-tek-inc-",
    contact: "linkedin.com/in/ahida-sultana; linkedin.com/in/tamanna-tashin-379a972a1; linkedin.com/in/maisha-subah-promi-3b14a9305"
  },


];

const jobPortals = [
  { name: "BDJobs", website: "bdjobs.com" },
  { name: "ATB Jobs", website: "atb-jobs.com" },
  { name: "LinkedIn Jobs", website: "linkedin.com/jobs" },
  { name: "Skill Jobs", website: "skill.jobs" },
  { name: "Shomvob", website: "app.shomvob.co" },
  { name: "TechnTalents", website: "techntalents.com" },
  { name: "Alljobs", website: "alljobs.teletalk.com.bd" },
  { name: "Google Jobs", website: "google.com/search?q=jobs near me" },
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

        <span class="info-label">Recruiter</span>
        <span class="info-value">${c.contact ? c.contact.split(';').map(h => linkVal(h.trim())).join('<br/>') : '<span class="na">N/A</span>'}</span>
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

// Job Portals section
const portalDivider = document.createElement('div');
portalDivider.className = 'alpha-divider';
portalDivider.textContent = 'Job Portals';
list.appendChild(portalDivider);

const portalItems = [];
jobPortals.forEach(p => {
  const el = document.createElement('div');
  el.className = 'company-item';
  el.innerHTML = `
    <div class="company-header" role="button" tabindex="0" aria-expanded="false">
      <span class="company-name">${p.name}</span>
      <svg class="chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 6 8 10 12 6"/>
      </svg>
    </div>
    <div class="company-body">
      <div class="info-grid">
        <span class="info-label">Website</span>
        <span class="info-value">${linkVal(p.website)}</span>
      </div>
    </div>
  `;
  const header = el.querySelector('.company-header');
  function toggle() {
    const isOpen = el.classList.toggle('open');
    header.setAttribute('aria-expanded', isOpen);
  }
  header.addEventListener('click', toggle);
  header.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  });
  el.dataset.portalName = p.name.toLowerCase();
  el.dataset.portalWebsite = p.website.toLowerCase();
  portalItems.push(el);
  list.appendChild(el);
});

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

  // Filter portal items
  let portalsVisible = 0;
  portalItems.forEach(el => {
    const match = !q || el.dataset.portalName.includes(q) || el.dataset.portalWebsite.includes(q);
    el.style.display = match ? '' : 'none';
    if (match) portalsVisible++;
  });
  portalDivider.style.display = portalsVisible > 0 ? '' : 'none';

  noResults.style.display = (visible === 0 && portalsVisible === 0) ? '' : 'none';
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
