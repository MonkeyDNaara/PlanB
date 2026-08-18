import { faker } from '@faker-js/faker';
import { sequelize, User, Event } from './db.js';

faker.seed(42);

const USERS_COUNT = 10;

const EVENT_TEMPLATES = [
  {
    title: 'Primavera Sound Barcelona',
    description:
      "One of Europe's most celebrated indie and alternative music festivals, taking over the Parc del Fòrum with hundreds of acts across multiple stages for an unforgettable weekend by the sea.",
    location: 'Parc del Fòrum, Barcelona, Spain',
    latitude: 41.4036,
    longitude: 2.2216
  },
  {
    title: 'Tomorrowland',
    description:
      "The world's most iconic electronic music festival transforms the Belgian town of Boom into a fantasy realm, with breathtaking stage designs and the planet's best DJs performing across a magical weekend.",
    location: 'De Schorre, Boom, Belgium',
    latitude: 51.0938,
    longitude: 4.3729
  },
  {
    title: 'Roskilde Festival',
    description:
      "Scandinavia's largest music festival and one of Europe's oldest, blending massive headliners with underground acts across eight days of music, art, and community in the Danish countryside.",
    location: 'Roskilde Festival Grounds, Roskilde, Denmark',
    latitude: 55.6415,
    longitude: 12.0803
  },
  {
    title: 'Montreux Jazz Festival',
    description:
      'Held on the shores of Lake Geneva since 1967, this legendary Swiss festival bridges jazz, blues, soul, and pop with world-class performances in one of the most breathtaking settings in Europe.',
    location: 'Stravinski Auditorium, Montreux, Switzerland',
    latitude: 46.4312,
    longitude: 6.9107
  },
  {
    title: 'Sziget Festival Budapest',
    description:
      'Known as the Island of Freedom, Sziget turns a Danube island in the heart of Budapest into a week-long city of music, art installations, and cultural exchange drawing hundreds of thousands of visitors.',
    location: 'Óbudai-sziget, Budapest, Hungary',
    latitude: 47.5566,
    longitude: 19.0534
  },
  {
    title: 'NOS Alive',
    description:
      "Lisbon's premier rock and alternative festival unfolds along the Tagus river estuary, featuring globally acclaimed headliners alongside rising Portuguese talent in a stunning riverside setting.",
    location: 'Passeio Marítimo de Algés, Lisbon, Portugal',
    latitude: 38.7037,
    longitude: -9.2236
  },
  {
    title: 'Øya Festival',
    description:
      "Oslo's beloved urban music festival brings together indie, electronic, hip-hop and world music in the historic Tøyenparken, earning its reputation as one of the most curated festivals in Scandinavia.",
    location: 'Tøyenparken, Oslo, Norway',
    latitude: 59.9139,
    longitude: 10.7701
  },
  {
    title: 'Flow Festival Helsinki',
    description:
      'A forward-thinking urban festival in a converted Helsinki power plant that fuses music, art, food culture, and sustainability — a model for how festivals can inspire while treading lightly on the planet.',
    location: 'Suvilahti, Helsinki, Finland',
    latitude: 60.1862,
    longitude: 24.9705
  },
  {
    title: 'Rock am Ring',
    description:
      "Germany's most iconic rock festival, set dramatically beside the legendary Nürburgring circuit, draws over 90,000 fans each year for three days of hard rock, metal, and alternative headliners.",
    location: 'Nürburgring, Nürburg, Germany',
    latitude: 50.3328,
    longitude: 6.9428
  },
  {
    title: 'Glastonbury Festival',
    description:
      "The world's most famous outdoor festival transforms Somerset farmland into a temporary city of 200,000, offering five days of music across hundreds of stages alongside theatre, circus, and unparalleled atmosphere.",
    location: 'Worthy Farm, Pilton, Somerset, UK',
    latitude: 51.1445,
    longitude: -2.5895
  },
  {
    title: 'Venice Biennale',
    description:
      "The world's most prestigious contemporary art exhibition, staged across Venice's palazzos and the iconic Arsenale, inviting artists from every nation to respond to the most pressing questions of our time.",
    location: 'Giardini della Biennale, Venice, Italy',
    latitude: 45.4302,
    longitude: 12.3604
  },
  {
    title: 'Art Basel',
    description:
      'The global epicentre of the contemporary art market, Art Basel gathers over 200 premier galleries in the Swiss city to present paintings, sculptures, installations, and works on paper by artists from across the centuries.',
    location: 'Messe Basel, Basel, Switzerland',
    latitude: 47.5596,
    longitude: 7.5886
  },
  {
    title: 'Frieze London',
    description:
      "London's defining contemporary art fair pitches a spectacular tent in Regent's Park each October, uniting the world's leading galleries and emerging voices in a curated celebration of art, ideas, and conversation.",
    location: "Regent's Park, London, UK",
    latitude: 51.5274,
    longitude: -0.1543
  },
  {
    title: 'documenta Kassel',
    description:
      "Held every five years in the German city of Kassel, documenta is the world's most significant exhibition of contemporary art, presenting ambitious, politically charged works that shape cultural discourse for a generation.",
    location: 'Friedrichsplatz, Kassel, Germany',
    latitude: 51.3127,
    longitude: 9.4797
  },
  {
    title: 'Paris Photo',
    description:
      "The world's largest art fair dedicated to photography takes over the Grand Palais, gathering galleries and publishers from forty countries to celebrate the medium in all its historical depth and contemporary breadth.",
    location: 'Grand Palais, Paris, France',
    latitude: 48.866,
    longitude: 2.3124
  },
  {
    title: 'Edinburgh Art Festival',
    description:
      "Scotland's national celebration of visual art runs alongside the world-famous Fringe, animating Edinburgh's historic galleries and unexpected spaces with commissions, exhibitions, and public art throughout August.",
    location: 'Various Venues, Edinburgh, Scotland',
    latitude: 55.9533,
    longitude: -3.1883
  },
  {
    title: 'Amsterdam Art Week',
    description:
      "Amsterdam's most vibrant art week opens the doors of the city's finest galleries, studios, and institutions, with special events, collector tours, and late-night openings across the canal ring.",
    location: 'Stedelijk Museum Area, Amsterdam, Netherlands',
    latitude: 52.358,
    longitude: 4.8797
  },
  {
    title: 'Athens Photo World',
    description:
      'One of the most important photography festivals in southeastern Europe, bringing international and Greek photographers together in historic Athenian venues to explore urgent stories from around the world.',
    location: 'Technopolis, Athens, Greece',
    latitude: 37.9799,
    longitude: 23.7204
  },
  {
    title: 'Vienna Art Week',
    description:
      "Vienna's prestigious art week invites collectors, curators, and art lovers into the imperial capital's galleries, auction houses, and museums for exclusive openings, studio visits, and panel conversations.",
    location: 'Museum Quarter, Vienna, Austria',
    latitude: 48.2036,
    longitude: 16.3583
  },
  {
    title: 'Unseen Amsterdam',
    description:
      "The world's leading fair for new photography discovers and showcases emerging photographic artists from every corner of the globe, presented in Amsterdam's iconic Westergasfabriek cultural complex.",
    location: 'Westergasfabriek, Amsterdam, Netherlands',
    latitude: 52.3868,
    longitude: 4.8724
  },
  {
    title: 'Oktoberfest Munich',
    description:
      "The world's largest folk festival fills the Theresienwiese with enormous beer tents, roasted meats, and Bavarian brass bands each September, drawing six million visitors to celebrate centuries of tradition.",
    location: 'Theresienwiese, Munich, Germany',
    latitude: 48.1317,
    longitude: 11.5496
  },
  {
    title: 'Madrid Fusión',
    description:
      "The world's most influential culinary summit gathers three-star chefs, food scientists, and gastronomic thinkers in Madrid to unveil new techniques, debate the future of cooking, and celebrate Spanish cuisine.",
    location: 'IFEMA, Madrid, Spain',
    latitude: 40.4649,
    longitude: -3.6127
  },
  {
    title: 'Taste of London',
    description:
      "London's most glamorous food festival brings together the city's most celebrated restaurants in Regent's Park, offering tasting menus, live chef demos, and artisan producers in a gorgeous outdoor setting.",
    location: "Regent's Park, London, UK",
    latitude: 51.5274,
    longitude: -0.1543
  },
  {
    title: 'Bordeaux Fête du Vin',
    description:
      'Every two years the quays of Bordeaux transform into the greatest wine celebration on earth, with hundreds of châteaux pouring their finest vintages along the Garonne river under the summer sun.',
    location: 'Quais de Bordeaux, Bordeaux, France',
    latitude: 44.8378,
    longitude: -0.5605
  },
  {
    title: 'Brussels Beer Weekend',
    description:
      "The Grand Place of Brussels — one of the most beautiful squares in the world — becomes the stage for Belgium's grand celebration of beer culture, with hundreds of breweries pouring thousands of unique brews.",
    location: 'Grand Place, Brussels, Belgium',
    latitude: 50.8467,
    longitude: 4.3525
  },
  {
    title: 'Salon du Chocolat Paris',
    description:
      "The world's largest event dedicated to chocolate and cocoa takes over the Paris Expo, featuring master chocolatiers, innovative tastings, a legendary chocolate fashion show, and the full art of confectionery.",
    location: 'Paris Expo Porte de Versailles, Paris, France',
    latitude: 48.8318,
    longitude: 2.2878
  },
  {
    title: 'Gelato World Tour Rome',
    description:
      "The greatest gelato competition on the planet descends on Rome, where artisan gelato makers from across Europe and beyond compete for the title of world's best gelato in the eternal city's historic piazzas.",
    location: 'Piazza Navona, Rome, Italy',
    latitude: 41.8992,
    longitude: 12.4731
  },
  {
    title: 'Barcelona Wine Week',
    description:
      "Spain's most dynamic wine event showcases the extraordinary diversity of Spanish viticulture, from Rioja to Priorat, with masterclasses, trade tastings, and public sessions across the Catalan capital.",
    location: 'Fira de Barcelona, Barcelona, Spain',
    latitude: 41.3731,
    longitude: 2.1491
  },
  {
    title: 'Lyon Gastronomic Festival',
    description:
      "The culinary capital of France celebrates its greatest gift to the world — Lyonnaise cuisine — with a week of market tastings, bouchon dinners, chef demonstrations, and street food in the Presqu'île.",
    location: "Presqu'île, Lyon, France",
    latitude: 45.7577,
    longitude: 4.8328
  },
  {
    title: 'World Cheese Awards Trondheim',
    description:
      "Thousands of cheeses from around the world are judged by international experts at the world's largest cheese competition, hosted this year in the striking Norwegian city of Trondheim.",
    location: 'Trondheim Spektrum, Trondheim, Norway',
    latitude: 63.4305,
    longitude: 10.3951
  },
  {
    title: 'Berlin Marathon',
    description:
      'One of the six World Marathon Majors and the fastest marathon course on earth, the Berlin Marathon carries 45,000 runners through thirty years of history and past iconic landmarks including the Brandenburg Gate.',
    location: 'Brandenburg Gate, Berlin, Germany',
    latitude: 52.5163,
    longitude: 13.3777
  },
  {
    title: 'Tour de France Paris Finale',
    description:
      "The most dramatic day in professional cycling: the peloton sweeps down the Champs-Élysées in the grand finale of the world's greatest race, with sprint teams battling for the most prestigious stage victory in sport.",
    location: 'Champs-Élysées, Paris, France',
    latitude: 48.8698,
    longitude: 2.3078
  },
  {
    title: 'Rome Marathon',
    description:
      'Run through an open-air museum: the Rome Marathon takes runners past the Colosseum, the Forum, the Vatican, and the Circus Maximus in a course that makes world history your finishing straight.',
    location: 'Colosseum, Rome, Italy',
    latitude: 41.8902,
    longitude: 12.4922
  },
  {
    title: 'Amsterdam Marathon',
    description:
      'One of the most scenic city marathons in Europe, the Amsterdam Marathon winds through the canal ring, past the Rijksmuseum, and finishes dramatically inside the historic Olympic Stadium.',
    location: 'Olympic Stadium, Amsterdam, Netherlands',
    latitude: 52.3432,
    longitude: 4.8531
  },
  {
    title: 'Tour of Flanders',
    description:
      'The most revered one-day cycling race in the world sends professionals up the legendary Koppenberg and Oude Kwaremont cobbled climbs in a brutal contest through the Belgian countryside that defines spring classics.',
    location: 'Oudenaarde, Belgium',
    latitude: 50.8466,
    longitude: 3.607
  },
  {
    title: 'Vienna City Marathon',
    description:
      "More than 40,000 runners take to the streets of Vienna in one of Europe's most popular marathons, passing the Opera House, St. Stephen's Cathedral, and the grand Ringstrasse boulevard.",
    location: 'Ringstrasse, Vienna, Austria',
    latitude: 48.2082,
    longitude: 16.3738
  },
  {
    title: 'Lisbon Half Marathon',
    description:
      'The world record half marathon course winds along the Tagus river from the iconic Ponte Vasco da Gama — the longest bridge in Europe — into the heart of Lisbon in a flat, fast, unforgettable race.',
    location: 'Ponte Vasco da Gama, Lisbon, Portugal',
    latitude: 38.6936,
    longitude: -9.0986
  },
  {
    title: 'Cowes Week Regatta',
    description:
      "The world's longest-running and most prestigious sailing regatta sees hundreds of yachts race off the Isle of Wight across eight days of fierce competition, social celebration, and maritime tradition.",
    location: 'Cowes, Isle of Wight, UK',
    latitude: 50.7617,
    longitude: -1.2978
  },
  {
    title: 'Kitzbühel Ski Opening',
    description:
      "The legendary Hahnenkamm race weekend in Kitzbühel signals the start of the World Cup ski season, with the world's bravest downhill racers tackling the fearsome Streif in a carnival atmosphere.",
    location: 'Hahnenkamm, Kitzbühel, Austria',
    latitude: 47.4461,
    longitude: 12.392
  },
  {
    title: 'Nazaré Big Wave Surf Challenge',
    description:
      'The small Portuguese fishing town of Nazaré hosts the most extreme surfing on the planet, where a unique underwater canyon generates waves in excess of 30 metres and surfers chase world records.',
    location: 'Praia do Norte, Nazaré, Portugal',
    latitude: 39.6013,
    longitude: -9.0709
  },
  {
    title: 'Web Summit Lisbon',
    description:
      "The world's largest technology conference transforms Lisbon's FIL into a city of ideas, with 70,000 attendees, 2,500 startups, and the most influential voices in technology converging for four extraordinary days.",
    location: 'Altice Arena, Lisbon, Portugal',
    latitude: 38.7678,
    longitude: -9.0934
  },
  {
    title: 'TNW Conference Amsterdam',
    description:
      "The Next Web conference brings the global tech community to Amsterdam for two days of inspiring keynotes, intimate masterclasses, and unparalleled networking in the heart of Europe's startup capital.",
    location: 'Gashouder, Amsterdam, Netherlands',
    latitude: 52.3868,
    longitude: 4.8724
  },
  {
    title: 'Slush Helsinki',
    description:
      "Born from a student initiative, Slush has grown into Europe's leading startup event, drawing 13,000 founders, investors, and journalists to the wintry Finnish capital for two days of pitches and connections.",
    location: 'Messukeskus, Helsinki, Finland',
    latitude: 60.2005,
    longitude: 24.9272
  },
  {
    title: 'DLD Munich Conference',
    description:
      'DLD brings together the most influential names in digital, life sciences, and design in Munich each January for provocative talks, interdisciplinary dialogue, and forward-looking debate about our shared future.',
    location: 'HVB Forum, Munich, Germany',
    latitude: 48.1351,
    longitude: 11.582
  },
  {
    title: 'Dublin Tech Summit',
    description:
      "Ireland's largest technology conference gathers over 6,000 tech leaders, entrepreneurs, and investors for two days exploring AI, fintech, cybersecurity, and sustainability at Dublin's iconic RDS Arena.",
    location: 'RDS Arena, Dublin, Ireland',
    latitude: 53.3209,
    longitude: -6.2278
  },
  {
    title: 'Nordic Startup Summit Stockholm',
    description:
      "Stockholm's premier event for the Nordic technology ecosystem brings together the region's most ambitious founders, leading VCs, and global tech companies for a full day of vision and venture.",
    location: 'Epicenter, Stockholm, Sweden',
    latitude: 59.3371,
    longitude: 18.069
  },
  {
    title: 'London Tech Week',
    description:
      "Europe's largest technology festival spans a week of events across London, from ExCeL to Canary Wharf, connecting the global digital economy with the UK's most dynamic innovators and investors.",
    location: 'ExCeL London, London, UK',
    latitude: 51.5073,
    longitude: 0.0318
  },
  {
    title: 'Berlin AI Summit',
    description:
      "Europe's most important artificial intelligence conference convenes policymakers, researchers, entrepreneurs, and ethicists in Berlin to shape the future of AI governance, creativity, and enterprise.",
    location: 'Station Berlin, Berlin, Germany',
    latitude: 52.4991,
    longitude: 13.3814
  },
  {
    title: 'Warsaw Future of Work Forum',
    description:
      "Central Europe's fastest-growing technology event brings together HR innovators, automation engineers, and future-of-work thinkers to explore how technology is reshaping employment across the continent.",
    location: 'Warsaw Expo XXI, Warsaw, Poland',
    latitude: 52.1963,
    longitude: 20.967
  },
  {
    title: 'Collision Conference Dublin',
    description:
      "One of the fastest-growing tech conferences in the world, Collision brings its electric combination of world-class speakers, startup competitions, and investor connections to Dublin's modern docklands.",
    location: 'Convention Centre Dublin, Dublin, Ireland',
    latitude: 53.3459,
    longitude: -6.2386
  },
  {
    title: 'Cannes Film Festival',
    description:
      "The most glamorous event in world cinema unfolds on the French Riviera, as auteurs and stars compete for the Palme d'Or in a festival that has shaped cinematic history for over seventy years.",
    location: 'Palais des Festivals, Cannes, France',
    latitude: 43.5514,
    longitude: 7.027
  },
  {
    title: 'Berlinale International Film Festival',
    description:
      "One of the world's most politically engaged film festivals, the Berlinale opens Berlin each February to a celebration of cinema that prizes bold storytelling, human rights, and extraordinary international talent.",
    location: 'Berlinale Palast, Berlin, Germany',
    latitude: 52.5076,
    longitude: 13.3764
  },
  {
    title: 'Venice Film Festival',
    description:
      "The world's oldest film festival — held since 1932 on the Lido island — remains one of cinema's most romantic and significant gatherings, launching Oscar contenders and celebrating cinematic artistry.",
    location: 'Palazzo del Cinema, Venice Lido, Italy',
    latitude: 45.4115,
    longitude: 12.3706
  },
  {
    title: 'San Sebastián International Film Festival',
    description:
      "Nestled in the Basque Country's most elegant resort city, this prestigious festival has championed European arthouse and Latin American cinema for seven decades along the stunning La Concha bay.",
    location: 'Kursaal, San Sebastián, Spain',
    latitude: 43.3215,
    longitude: -1.9897
  },
  {
    title: 'Edinburgh International Film Festival',
    description:
      "The world's longest-running film festival has screened landmark films by Hitchcock and Kubrick, and today remains one of the most essential platforms for discovering bold new voices in world cinema.",
    location: 'Filmhouse, Edinburgh, Scotland',
    latitude: 55.9483,
    longitude: -3.202
  },
  {
    title: 'Göteborgs Film Festival',
    description:
      "Northern Europe's largest film festival draws 160,000 filmgoers to the Swedish city of Gothenburg for two weeks of Nordic premieres, international cinema, industry events, and a unique solo film marathon.",
    location: 'Göteborg, Sweden',
    latitude: 57.7089,
    longitude: 11.9746
  },
  {
    title: 'Sarajevo Film Festival',
    description:
      "Born during wartime siege as an act of cultural defiance, the Sarajevo Film Festival has grown into the most important film festival in Southeast Europe, celebrating the cinema of a region's resilience and creativity.",
    location: 'National Theatre, Sarajevo, Bosnia',
    latitude: 43.8563,
    longitude: 18.4131
  },
  {
    title: 'Thessaloniki International Film Festival',
    description:
      "Greece's most important film event celebrates independent and arthouse cinema from around the world, taking place in the vibrant northern port city famous for its Byzantine heritage and legendary nightlife.",
    location: 'Olympion Cinema, Thessaloniki, Greece',
    latitude: 40.6315,
    longitude: 22.9454
  },
  {
    title: 'Warsaw Film Festival',
    description:
      "Poland's leading international film festival showcases the most acclaimed and provocative films from around the world alongside outstanding Polish productions in the cultural heart of Central Europe.",
    location: 'Kinoteka, Warsaw, Poland',
    latitude: 52.2315,
    longitude: 21.0062
  },
  {
    title: 'London Film Festival',
    description:
      "The BFI London Film Festival is the UK's most prestigious film event, presenting over 200 features and shorts from more than 70 countries at historic venues across the British capital each October.",
    location: 'BFI Southbank, London, UK',
    latitude: 51.5054,
    longitude: -0.1136
  },
  {
    title: 'Strasbourg Christmas Market',
    description:
      "Dating back to 1570, the Christkindelsmärik in Strasbourg is Europe's oldest Christmas market, filling the city's medieval streets and magnificent cathedral square with the scent of mulled wine and warm gingerbread.",
    location: 'Place Broglie, Strasbourg, France',
    latitude: 48.5821,
    longitude: 7.7452
  },
  {
    title: 'Vienna Christmas Market',
    description:
      'The Rathausmarkt in Vienna transforms into one of the most enchanting Christmas markets in the world, with over 150 stalls set against the glowing neo-Gothic facade of the City Hall each December.',
    location: 'Rathausplatz, Vienna, Austria',
    latitude: 48.2099,
    longitude: 16.3563
  },
  {
    title: 'Prague Christmas Market',
    description:
      'Old Town Square in Prague becomes a fairy-tale scene at Christmas, with wooden stalls selling handcrafted ornaments and traditional svařák beneath the soaring Gothic towers of the Týn Church.',
    location: 'Old Town Square, Prague, Czech Republic',
    latitude: 50.0875,
    longitude: 14.4213
  },
  {
    title: 'Nuremberg Christkindlesmarkt',
    description:
      "Perhaps the most famous Christmas market in Germany, the Nuremberg Christkindlesmarkt has been held in the medieval city's main market square since 1628, a timeless tradition of craft and seasonal wonder.",
    location: 'Hauptmarkt, Nuremberg, Germany',
    latitude: 49.4548,
    longitude: 11.0773
  },
  {
    title: 'Brussels Winter Wonders',
    description:
      "Brussels' magical winter festival fills the Grand Place and surrounding streets with an enormous Christmas market, an ice skating rink, a giant Ferris wheel, and dazzling light installations throughout December.",
    location: 'Grand Place, Brussels, Belgium',
    latitude: 50.8467,
    longitude: 4.3525
  },
  {
    title: 'Keukenhof Tulip Festival',
    description:
      'Seven million flower bulbs burst into colour across 32 hectares of meticulously landscaped gardens near Lisse, making Keukenhof the most spectacular flower show on earth during the Dutch spring.',
    location: 'Keukenhof Gardens, Lisse, Netherlands',
    latitude: 52.2697,
    longitude: 4.5471
  },
  {
    title: 'Chelsea Flower Show London',
    description:
      "The Royal Horticultural Society's iconic Chelsea Flower Show is the world's most prestigious horticultural event, where celebrated designers create breathtaking show gardens in the grounds of the Royal Hospital.",
    location: 'Royal Hospital Chelsea, London, UK',
    latitude: 51.4874,
    longitude: -0.1563
  },
  {
    title: 'Ghent Floralies',
    description:
      "Held every five years, the Ghent Floralies is Europe's grandest flower and plant exhibition, flooding the Flanders Expo with extraordinary floral installations and rare botanical specimens from every continent.",
    location: 'Flanders Expo, Ghent, Belgium',
    latitude: 51.019,
    longitude: 3.6827
  },
  {
    title: 'Edinburgh Christmas Market',
    description:
      'East Princes Street Gardens beneath the floodlit Edinburgh Castle becomes one of the most romantic Christmas market settings in Britain, with European traders, fairground rides, and a magnificent ice rink.',
    location: 'East Princes Street Gardens, Edinburgh, Scotland',
    latitude: 55.9521,
    longitude: -3.1965
  },
  {
    title: 'Copenhagen Christmas Market',
    description:
      "Tivoli Gardens, the world's most enchanting amusement park, becomes a winter wonderland each November, adorned with half a million lights, traditional Danish crafts, and warming glasses of gløgg.",
    location: 'Tivoli Gardens, Copenhagen, Denmark',
    latitude: 55.6735,
    longitude: 12.5683
  },
  {
    title: 'Edinburgh Festival Fringe',
    description:
      "The world's largest arts festival takes over every theatre, pub cellar, and street corner in Edinburgh for three extraordinary weeks, with over 50,000 performances of comedy, theatre, dance, and circus.",
    location: 'Various Venues, Edinburgh, Scotland',
    latitude: 55.9533,
    longitude: -3.1883
  },
  {
    title: 'Avignon Theatre Festival',
    description:
      "Created by Jean Vilar in 1947, the Festival d'Avignon transforms the ancient papal city into the world's most significant gathering of contemporary theatre, with the Cour d'honneur serving as its iconic open-air stage.",
    location: 'Palais des Papes, Avignon, France',
    latitude: 43.9493,
    longitude: 4.806
  },
  {
    title: 'Salzburg Festival',
    description:
      "The most prestigious music and drama festival in the world draws the greatest conductors, singers, and directors to Mozart's birthplace each summer for five weeks of extraordinary opera, concert, and theatre.",
    location: 'Felsenreitschule, Salzburg, Austria',
    latitude: 47.7981,
    longitude: 13.0435
  },
  {
    title: 'Bayreuth Wagner Festival',
    description:
      "Wagner's own festival theatre on the Green Hill in Bayreuth hosts the only performances in the world dedicated exclusively to his operatic masterworks, with decade-long waiting lists and unparalleled acoustics.",
    location: 'Bayreuther Festspielhaus, Bayreuth, Germany',
    latitude: 49.9456,
    longitude: 11.5713
  },
  {
    title: 'Vienna Opera Ball',
    description:
      'The most glamorous event in the European social calendar: the Vienna State Opera becomes the most beautiful ballroom in the world for a single night, as 7,000 guests waltz under the chandeliers of the Habsburg empire.',
    location: 'Vienna State Opera, Vienna, Austria',
    latitude: 48.203,
    longitude: 16.3694
  },
  {
    title: 'Epidaurus Ancient Theatre Festival',
    description:
      "Ancient Greek tragedies and comedies are performed under the stars in the 2,400-year-old theatre of Epidaurus — one of the most acoustically perfect spaces ever created — in an experience connecting us to civilisation's origins.",
    location: 'Ancient Theatre of Epidaurus, Greece',
    latitude: 37.63,
    longitude: 23.0655
  },
  {
    title: 'Aix-en-Provence Opera Festival',
    description:
      "In the ancient Archbishop's Palace courtyard, the Festival d'Aix presents groundbreaking opera productions by the world's most visionary directors alongside free outdoor concerts throughout the elegant Provençal city.",
    location: 'Archevêché, Aix-en-Provence, France',
    latitude: 43.5297,
    longitude: 5.4474
  },
  {
    title: 'Spoleto Festival dei Due Mondi',
    description:
      'Founded by Gian Carlo Menotti, the Festival of Two Worlds transforms the perfectly preserved medieval hill town of Spoleto each summer into a stage for world-class opera, ballet, and theatrical innovation.',
    location: 'Teatro Nuovo, Spoleto, Italy',
    latitude: 42.7347,
    longitude: 12.7379
  },
  {
    title: 'Barcelona Grec Festival',
    description:
      "Barcelona's summer festival of performing arts stages international theatre, dance, circus, and music across the city's most beautiful venues, anchored by the magnificent open-air Teatre Grec on Montjuïc hill.",
    location: 'Teatre Grec, Barcelona, Spain',
    latitude: 41.368,
    longitude: 2.1574
  },
  {
    title: 'Lisbon Carnaval da Cultura',
    description:
      "Lisbon's unique multicultural carnival celebration weaves together fado, African rhythms, Brazilian samba, and contemporary dance in a week of free outdoor performances celebrating the city's extraordinary diversity.",
    location: 'Praça do Comércio, Lisbon, Portugal',
    latitude: 38.7072,
    longitude: -9.1364
  },
  {
    title: 'Chamonix Snowboard World Cup',
    description:
      "The Aiguille du Midi cable car and legendary off-piste terrain of Chamonix frame a thrilling FIS Snowboard World Cup event where the world's best halfpipe and slopestyle riders compete at the foot of Mont Blanc.",
    location: 'Chamonix-Mont-Blanc, France',
    latitude: 45.9237,
    longitude: 6.8694
  },
  {
    title: 'Fontainebleau Bouldering Open',
    description:
      "The sandstone boulders of the Fontainebleau forest — the birthplace of modern free climbing — host Europe's most beloved outdoor bouldering competition, drawing thousands of climbers of all levels to the legendary Bleau.",
    location: 'Forêt de Fontainebleau, France',
    latitude: 48.4045,
    longitude: 2.6887
  },
  {
    title: 'Innsbruck Alpine Hiking Festival',
    description:
      'Surrounded by the Nordkette mountains in the heart of the Alps, the Innsbruck Hiking Festival guides participants across breathtaking high-altitude trails with expert mountain guides, hut dinners, and alpine sunrises.',
    location: 'Nordkettenbahn, Innsbruck, Austria',
    latitude: 47.3165,
    longitude: 11.3921
  },
  {
    title: 'Dolomites Via Ferrata Challenge',
    description:
      'Some of the most dramatic iron-route mountain climbing in the world runs across the vertical limestone towers of the Dolomites, offering climbers of all levels a once-in-a-lifetime adventure in a UNESCO World Heritage landscape.',
    location: "Cortina d'Ampezzo, Dolomites, Italy",
    latitude: 46.5362,
    longitude: 12.1352
  },
  {
    title: 'Scottish Highlands Trail Ultra',
    description:
      'One of the most beautiful and brutal ultra-running races in Europe follows ancient drove roads, glacial lochs, and exposed ridges through the wild Scottish Highlands, testing limits in a landscape of raw, breathtaking grandeur.',
    location: 'Fort William, Scottish Highlands, UK',
    latitude: 56.8198,
    longitude: -5.1052
  },
  {
    title: 'Lapland Aurora Trekking Week',
    description:
      'Deep in the Finnish Arctic, guided night treks through silent pine forests offer the best chances of witnessing the Northern Lights, with days spent on snowshoes and nights in glass-roofed cabins under the aurora borealis.',
    location: 'Saariselkä, Finnish Lapland, Finland',
    latitude: 68.4239,
    longitude: 27.4164
  },
  {
    title: 'Copenhagen Harbour Swimming Race',
    description:
      "Copenhagen's notoriously clean harbour hosts Scandinavia's most popular open-water swim, with thousands of Copenhageners plunging into the Inderhavnen for a race that celebrates the city's extraordinary harbour renewal.",
    location: 'Islands Brygge, Copenhagen, Denmark',
    latitude: 55.6657,
    longitude: 12.5765
  },
  {
    title: 'Mallorca Cycling Challenge',
    description:
      "The golden hills of Mallorca host Europe's most popular cycling challenge, as thousands of amateur cyclists tackle the legendary routes of the Tramuntana mountains that have made the island the winter training capital of professional cycling.",
    location: 'Serra de Tramuntana, Mallorca, Spain',
    latitude: 39.7434,
    longitude: 2.7882
  },
  {
    title: 'North Sea Trail Running Festival',
    description:
      'The wild Dutch coastline between The Hague and Scheveningen hosts a spectacular coastal trail running festival, with routes along dunes, beaches, and North Sea cliffs for distances from 10K to 60K.',
    location: 'Scheveningen, The Hague, Netherlands',
    latitude: 52.1097,
    longitude: 4.2741
  },
  {
    title: 'Midnight Sun Run Tromsø',
    description:
      'Tromsø in northern Norway hosts a legendary midnight sun marathon where runners race through the night in full daylight — a surreal and joyful celebration of the Arctic summer solstice above the 69th parallel.',
    location: 'Tromsø, Norway',
    latitude: 69.6492,
    longitude: 18.9553
  },
  {
    title: 'Carnival of Venice',
    description:
      "The world's most mysterious and theatrical carnival fills the streets, bridges, and piazzas of Venice with elaborately costumed revellers, masquerade balls, and the irresistible magic of a city wearing its most beautiful mask.",
    location: 'Piazza San Marco, Venice, Italy',
    latitude: 45.4341,
    longitude: 12.3388
  },
  {
    title: 'Notting Hill Carnival',
    description:
      "Europe's largest street festival explodes onto the streets of west London in an extraordinary celebration of Caribbean culture, with 40,000 costumed performers, hundreds of sound systems, and two million revellers over two days.",
    location: 'Notting Hill, London, UK',
    latitude: 51.5149,
    longitude: -0.2077
  },
  {
    title: 'Semana Santa Seville',
    description:
      'The most intense and moving Holy Week procession in the world transforms Seville into a cathedral without walls, as ancient brotherhoods carry towering floats through narrow streets to the sound of saetas and silent crowds.',
    location: 'Cathedral of Seville, Seville, Spain',
    latitude: 37.3861,
    longitude: -5.993
  },
  {
    title: 'Midsommar Stockholm',
    description:
      "Sweden's most beloved celebration gathers families and friends around flower-wrapped maypoles to dance, sing, and feast as the summer solstice sun barely dips below the horizon in one of Scandinavia's most joyful traditions.",
    location: 'Skansen Open Air Museum, Stockholm, Sweden',
    latitude: 59.3254,
    longitude: 18.1065
  },
  {
    title: 'Bastille Day Paris',
    description:
      "France's national day reaches its emotional peak on the Champs-Élysées with Europe's most impressive military parade, followed by a spectacular fireworks display over the Eiffel Tower that lights up the Paris sky.",
    location: 'Champs-Élysées, Paris, France',
    latitude: 48.8698,
    longitude: 2.3078
  },
  {
    title: "St. Patrick's Festival Dublin",
    description:
      "Dublin turns the world green for the world's greatest St. Patrick's Day festival, with the spectacular parade up O'Connell Street at its heart and five days of music, theatre, and céilí dancing across the Irish capital.",
    location: "O'Connell Street, Dublin, Ireland",
    latitude: 53.3503,
    longitude: -6.2597
  },
  {
    title: 'Carnaval de Nice',
    description:
      'The oldest and most spectacular carnival in France brings extravagant floats, satirical papier-mâché giants, and the legendary Battle of Flowers to the Promenade des Anglais in two weeks of Riviera celebration.',
    location: 'Promenade des Anglais, Nice, France',
    latitude: 43.6952,
    longitude: 7.2659
  },
  {
    title: 'Reykjavik Pride',
    description:
      "Iceland's most joyful public event draws a third of the entire Reykjavik population into the streets for a parade and festival that celebrates LGBTQ+ rights in one of the most progressive and welcoming nations on earth.",
    location: 'Laugavegur, Reykjavik, Iceland',
    latitude: 64.143,
    longitude: -21.9239
  },
  {
    title: 'La Tomatina Buñol',
    description:
      "Every last Wednesday of August, the small Valencian town of Buñol stages the world's most chaotic and exhilarating food fight, as 20,000 participants hurl 145,000 kilograms of overripe tomatoes at each other in pure jubilation.",
    location: 'Buñol, Valencia, Spain',
    latitude: 39.4224,
    longitude: -0.796
  },
  {
    title: 'San Fermín Running of the Bulls',
    description:
      "Pamplona's legendary nine-day festival reaches its adrenaline peak in the encierro — the morning running of the bulls through the narrow cobblestone streets of the old city, one of the most daring traditions in the world.",
    location: 'Calle Estafeta, Pamplona, Spain',
    latitude: 42.8192,
    longitude: -1.6439
  },

  // --- BONUS VARIED ---
  {
    title: 'Porto Book Fair',
    description:
      "The Palácio de Cristal gardens in Porto host one of Portugal's most cherished literary events, with hundreds of publishers, independent booksellers, and authors gathering riverside for a week of readings and debate.",
    location: 'Palácio de Cristal, Porto, Portugal',
    latitude: 41.1481,
    longitude: -8.623
  },
  {
    title: 'Krakow Jewish Culture Festival',
    description:
      "One of Europe's most moving and important cultural events, Krakow's Jewish Culture Festival revives the spirit of a once-vibrant community through concerts, exhibitions, and prayer in the historic Kazimierz district.",
    location: 'Kazimierz, Krakow, Poland',
    latitude: 50.0496,
    longitude: 19.9481
  },
  {
    title: 'Florence Biennale of Contemporary Art',
    description:
      "The cradle of the Renaissance welcomes the world's leading contemporary artists to the Fortezza da Basso for a major international art exhibition that puts Florence at the centre of global creative dialogue.",
    location: 'Fortezza da Basso, Florence, Italy',
    latitude: 43.7792,
    longitude: 11.2426
  },
  {
    title: 'Rotterdam Architecture Biennale',
    description:
      'The city that rebuilt itself from wartime rubble into a laboratory of modern architecture hosts a major international biennale exploring the built environment, urban futures, and the spaces we will inhabit tomorrow.',
    location: 'Het Nieuwe Instituut, Rotterdam, Netherlands',
    latitude: 51.9244,
    longitude: 4.466
  },
  {
    title: 'Dubrovnik Summer Festival',
    description:
      "For over seventy years, Dubrovnik's fortress walls, baroque squares, and sea-facing terraces have transformed into outdoor stages for a prestigious summer festival of theatre, opera, ballet, and classical music.",
    location: "Rector's Palace, Dubrovnik, Croatia",
    latitude: 42.6408,
    longitude: 18.1083
  }
];

const seedDB = async () => {
  const force = process.env.SEED_FORCE === 'true' || process.env.SEED_FORCE === '1';
  await sequelize.sync({ force });

  if (!force) {
    const userCount = await User.count();
    if (userCount > 0) {
      console.log(
        'Database already seeded (users exist). Skipping. Use SEED_FORCE=true to reset and re-seed.'
      );
      return false;
    }
  }

  const users = Array.from({ length: USERS_COUNT }, () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: '12345678'
  }));

  const createdUsers = await User.bulkCreate(users, { individualHooks: true });

  const events = EVENT_TEMPLATES.map(template => ({
    ...template,
    date: faker.date.future({ years: 1 }),
    organizerId: faker.helpers.arrayElement(createdUsers).id
  }));

  await Event.bulkCreate(events, { individualHooks: true });
  return true;
};

try {
  const didSeed = await seedDB();
  if (didSeed)
    console.log(`Database seeded with ${USERS_COUNT} users and ${EVENT_TEMPLATES.length} events.`);
} catch (error) {
  console.error({ error });
} finally {
  sequelize.close();
  console.log('Database connection closed');
}
