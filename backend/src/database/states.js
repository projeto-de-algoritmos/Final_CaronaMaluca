exports.cities = [
    {
        state: 'WA',
        name: 'Olympia',
        zipcode: '98501',
        edges: [
            '97301',
            '83701'
        ]
    },
    {
        state: 'OR',
        name: 'Salem',
        zipcode: '97301',
        edges: [
            '83701',
            '94203',
            '89721'
        ]
    },
    {
        state: 'CA',
        name: 'Sacramento',
        zipcode: '94203',
        edges: [
            '97301',
            '89721'
        ]
    },
    {
        state: 'MT',
        name: 'Helena',
        zipcode: '59601',
        edges: [
            '83701',
            '82001',
            '58501',
            '57501'
        ]
    },
    {
        state: 'ID',
        name: 'Boise',
        zipcode: '83701',
        edges: [
            '98501',
            '97301',
            '59601',
            '82001',
            '84101',
            '89721'

        ]
    },
    {
        state: 'NV',
        name: 'Carson City',
        zipcode: '89721',
        edges: [
            '97301',
            '94203',
            '83701',
            '84101',
            '85001'
        ]
    },
    {
        state: 'WY',
        name: 'Cheyenne',
        zipcode: '82001',
        edges: [
            '59601',
            '83701',
            '84101',
            '80201',
            '68501',
            '57501'
        ]
    },
    {
        state: 'UT',
        name: 'Salt Lake City',
        zipcode: '84101',
        edges: [
            '82001',
            '83701',
            '89721',
            '85001',
            '87501',
            '80201'
        ]
    },
    {
        state: 'AZ',
        name: 'Phoenix',
        zipcode: '85001',
        edges: [
            '84101',
            '94203',
            '89721',
            '80201',
            '87501'
        ]
    },
    {
        state: 'CO',
        name: 'Denver',
        zipcode: '80201',
        edges: [
            '82001',
            '84101',
            '85001',
            '87501',
            '68501',
            '66601',
            '73101'
        ]
    },
    {
        state: 'NM',
        name: 'Santa Fe',
        zipcode: '87501',
        edges: [
            '80201',
            '84101',
            '85001',
            '73101',
            '73301'
        ]
    },
    {

        state: 'ND',
        name: 'Bismarck',
        zipcode: '58501',
        edges: [
            '59601', // Helena - Montana - MT
            '57501', // Pierre - South Dakote  - SD
            '55101' // Saint Paul - Minnesota - MN
        ]
    },
    {
        state: 'SD',
        name: 'Pierre',
        zipcode: '57501',
        edges: [
            '58501', // Bismarck - North Dakota
            '59601', // Helena - Montana - MT
            '82001', // Cheyenne - WY
            '68501', // Lincoln - Nebraska - NE
            '50301', // Des moines - Iowa - IA
            '55101' // Saint Paul - Minnesota - MN
        ]
    },
    {
        state: 'NE',
        name: 'Lincoln',
        zipcode: '68501',
        edges: [
            '57501', // Pierre - South Dakota - SD
            '82001', // Cheyenne - WY
            '80201', // Denver - Colorado - CO
            '66601', // Tokepa - Kansas - KS
            '65101', // Jefferson City - Missouri - MO
            '50301', // Des moines - Iowa - IA
        ]
    },
    {
        state: 'KS',
        name: 'Topeka',
        zipcode: '66601',
        edges: [
            '68501', // Lincoln - Nebraska - NE
            '80201', // Denver - Colorado - CO
            '73101', // Oklahoma City - Oklahoma - OK
            '65101', // Jefferson City - Missouri - MO
        ]
    },
    {
        state: 'OK',
        name: 'Oklahoma City',
        zipcode: '73101',
        edges: [
            '66601', // Tokepa - Kansas - KS
            '80201', // Denver - Colorado - CO
            '87501', // Santa fé - New México - NM
            '73301', // Austin - Texas - TX
            '72201', // Little Rock - Arkansas - AR
            '65101', // Jefferson City - Missouri - MO
        ]
    },
    {
        state: 'TX',
        name: 'Austin',
        zipcode: '73301',
        edges: [
            '73101', // Oklahoma City - Oklahoma - OK
            '87501', // Santa fé - New México - NM
            '70801', // Baton Rouge - Lousiana - LA
            '72201', // Little Rock - Arkansas - AR
        ]
    },
    {
        state: 'ME',
        name: 'Augusta',
        zipcode: '04330',
        edges: [
            '03301'
        ]
    },
    {
        state: 'NH',
        name: 'Concord',
        zipcode: '03301',
        edges: [
            '04330',
            '02108',
            '05601'
        ]
    },
    {
        state: 'MA',
        name: 'Boston',
        zipcode: '02108',
        edges: [
            '05601',
            '03301',
            '12201',
            '02901',
            '06101'
        ]
    },
    {
        state: 'RI',
        name: 'Providence',
        zipcode: '02901',
        edges: [
            '02108',
            '06101'
        ]
    },
    {
        state: 'CT',
        name: 'Hartford',
        zipcode: '06101',
        edges: [
            '02901',
            '02108',
            '12201'
        ]
    },
    {
        state: 'VT',
        name: 'Montpelier',
        zipcode: '05601',
        edges: [
            '02108',
            '03301',
            '12201'
        ]
    },
    {
        state: 'NY',
        name: 'Albany',
        zipcode: '12201',
        edges: [
            '05601',
            '02108',
            '06101',
            '08601',
            '17101' // Harrisburg - Pennsylvania - PA
        ]
    },
    {
        state: 'NJ',
        name: 'Trenton',
        zipcode: '08601',
        edges: [
            '12201',
            '17101',
            '19901' // Dover - Delaware - DE
        ]
    },
    {
        state: 'PA',
        name: 'Harrisburg',
        zipcode: '17101',
        edges: [
            '12201',
            '08601',
            '19901', // Dover - Delaware - DE
            '21401', // Annapolis - Maryland - MD
            '43085', // Columbus - Ohio - OH
            '25301' // Charleston - West Virginia - WV
        ]
    },
    {
        state: 'DE',
        name: 'Dover',
        zipcode: '19901',
        edges: [
            '17101', // Harrisburg - Pennsylvanya - PA
            '08601', // Trenton - New Jersey - NJ
            '21401' // Annapolis - Maryland - MD
        ]
    },
    {
        state: 'MD',
        name: 'Annapolis',
        zipcode: '21401',
        edges: [
            '19901', // Dover - Delaware - DE
            '17101', // Harrisburg - Pennsylvanya - PA
            '25301', // Charleston - West Virginia - WV
            '23218' // Richmond - Virginia - VA
        ]
    },
    {
        state: 'VA',
        name: 'Richmond',
        zipcode: '23218',
        edges: [
            '21401', // Annapolis - Maryland - MD
            '25301', // Charleston - West Virginia - WV
            '27601', // Raleigh - North Carolina - NC
            '40601', // Frankfort - Kentuky - KY
            '37201' // Nashville - Tennesse - TN

        ]
    },
    {
        state: 'WV',
        name: 'Charleston',
        zipcode: '25301',
        edges: [
            '17101', // Harrisburg - Pennsylvanya - PA
            '21401', // Annapolis - Maryland - MD
            '23218', // Richmond - Virginia - VA
            '43085', // Columbus - Ohio - OH
            '40601', // Frankfort - Kentuky - KY
            '37201' // Nashville - Tennesse - TN
        ]
    },
    {
        state: 'NC',
        name: 'Raleigh',
        zipcode: '27601',
        edges: [
            '23218', // Richmond - Virginia - VA
            '37201', // Nashville - Tennesse - TN
            '29201', // Columbia - South Carolina - SC
            '30301' // Atlanta - Georgia - GA
        ]
    },
    {
        state: 'SC',
        name: 'Columbia',
        zipcode: '29201',
        edges: [
            '27601', // Raleigh - North Carolina - NC
            '30301' // Atlanta - Georgia - GA
        ]
    },
    {
        state: 'GA',
        name: 'Atlanta',
        zipcode: '30301',
        edges: [
            '36101', // Montgomery - Alabama - AL
            '32301', // Tallahassee - Florida - FL
            '29201' // Columbia - South Carolina - SC
        ]
    },
    {
        state: 'FL',
        name: 'Tallahassee',
        zipcode: '32301',
        edges: [
            '36101', // Montgomery - Alabama - AL
            '30301' // Atlanta - Georgia - GA
        ]
    },
    {
        state: 'TN',
        name: 'Nashville',
        zipcode: '37201',
        edges: [
            '27601', // Raleigh - North Carolina - NC
            '30301', // Atlanta - Georgia - GA
            '36101', // Montgomery - Alabama - AL
            '39201', // Jackson - Mississipi - MS
            '72201', // Little Rock - Arkansas - AR
            '65101', // Jefferson City - Missouri - MO
            '40601' // Frankfort - Kentuky - KY
        ]
    },
    {
        state: 'KY',
        name: 'Frankfort',
        zipcode: '40601',
        edges: [
            '43085', // Columbus - Ohio - OH
            '25301', // Charleston - West Virginia - WV
            '23218', // Richmond - Virginia - VA
            '37201', // Nashville - Tennesse - TN
            '65101', // Jefferson City - Missouri - MO
            '62701', // Springfield - Illinoi - IL
            '46201' // Indianapolis - Indiana - IN
        ]
    },
    {
        state: 'OH',
        name: 'Columbus',
        zipcode: '43085',
        edges: [
            '17101', // Harrisburg - Pennsylvania - PA
            '25301', // Charleston - West Virginia - WV
            '40601', // Frankfort - Kentuky - KY
            '46201', // Indianapolis - Indiana - IN
            '48901' // Lansing - Michigan - MI
        ]
    },
    {
        state: 'MI',
        name: 'Lansing',
        zipcode: '48901',
        edges: [
            '43085', // Columbus - Ohio - OH
            '46201' // Indianapolis - Indiana - IN
        ]
    },
    {
        state: 'AL',
        name: 'Montgomery',
        zipcode: '36101',
        edges: [
            '30301', // Atlanta - Georgia - GA
            '37201', // Nashville - Tennesse - TN
            '32301', // Tallahassee - Florida - FL
            '39201', // Jackson - Mississipi - MS

        ]
    },
    {
        state: 'MN',
        name: 'Saint Paul',
        zipcode: '55101',
        edges: [
            '58501', // Bismark - North Dakota - ND
            '57501', // Pierre - South Dakote  - SD
            '68501', // Lincoln - Nebraska - NE
            '50301', // Des moines - Iowa - IA
            '53701', // Madison - Wisconsin - WI
        ]
    },
    {
        state: 'IA',
        name: 'Des moines',
        zipcode: '50301',
        edges: [
            '55101', // Saint Paul - Minnesota - MN
            '57501', // Pierre - South Dakote  - SD
            '68501', // Lincoln - Nebraska - NE
            '65101', // Jefferson City - Missouri - MO
            '62701', // Springfield - Illinoi - IL
            '53701', // Madison - Wisconsin - WI
        ]
    },
    {
        state: 'MO',
        name: 'Jefferson City',
        zipcode: '65101',
        edges: [
            '50301', // Des moines - Iowa - IA
            '68501', // Lincoln - Nebraska - NE
            '66601', // Tokepa - Kansas - KS
            '73101', // Oklahoma City - Oklahoma - OK
            '72201', // Little Rock - Arkansas - AR
            '37201', // Nashville - Tennesse - TN
            '40601', // Frankfort - Kentuky - KY
            '62701', // Springfield - Illinoi - IL
        ]
    },
    {
        state: 'AR',
        name: 'Little Rock',
        zipcode: '72201',
        edges: [
            '65101', // Jefferson City - Missouri - MO
            '73101', // Oklahoma City - Oklahoma - OK
            '73301', // Austin - Texas - TX
            '70801', // Baton Rouge - Lousiana - LA
            '39201', // Jackson - Mississipi - MS
            '37201', // Nashville - Tennesse - TN
        ]
    },
    {
        state: 'LA',
        name: 'Baton Rouge',
        zipcode: '70801',
        edges: [
            '72201', // Little Rock - Arkansas - AR
            '73301', // Austin - Texas - TX
            '39201', // Jackson - Mississipi - MS
        ]
    },
    {
        state: 'WI',
        name: 'Madison',
        zipcode: '53701',
        edges: [
            '55101', // Saint Paul - Minnesota - MN
            '50301', // Des moines - Iowa - IA
            '62701', // Springfield - Illinoi - IL
            '48901' // Lansing - Michigan - MI
        ]
    },
    {
        state: 'IL',
        name: 'Springfield',
        zipcode: '62701',
        edges: [
            '53701', // Madison - Wisconsin - WI
            '50301', // Des moines - Iowa - IA
            '65101', // Jefferson City - Missouri - MO
            '48901', // Lansing - Michigan - MI
            '40601', // Frankfort - Kentuky - KY
            '46201', // Indianapolis - Indiana - IN
            '48901' // Lansing - Michigan - MI
        ]
    },
    {
        state: 'IL',
        name: 'Springfield',
        zipcode: '62701',
        edges: [
            '53701', // Madison - Wisconsin - WI
            '50301', // Des moines - Iowa - IA
            '65101', // Jefferson City - Missouri - MO
            '48901', // Lansing - Michigan - MI
            '40601', // Frankfort - Kentuky - KY
            '46201', // Indianapolis - Indiana - IN
            '48901' // Lansing - Michigan - MI
        ]
    },
    {
        state: 'IN',
        name: 'Indianapolis',
        zipcode: '46201',
        edges: [
            '48901', // Lansing - Michigan - MI
            '62701', // Springfield - Illinoi - IL
            '40601', // Frankfort - Kentuky - KY
            '43085', // Columbus - Ohio - OH
        ]
    },
    {
        state: 'MS',
        name: 'Jackson',
        zipcode: '39201',
        edges: [
            '37201', // Nashville - Tennesse - TN
            '72201', // Little Rock - Arkansas - AR
            '70801', // Baton Rouge - Lousiana - LA
            '36101', // Montgomery - Alabama - AL
        ]
    },
]