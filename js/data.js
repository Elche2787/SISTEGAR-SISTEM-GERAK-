/* Data materi, model 3D (Sketchfab), dan kuis.
   Untuk mengganti model 3D, ubah nilai "model" (ID Sketchfab 32 karakter). */
const MODULES = [
{
 id:"m1", ic:"🦴", title:"Pengantar & Pembagian Rangka", tag:"Umum", model:"748407ce8e42437a873d69533f7e6d12",
 intro:["Selamat datang, anak-anak! Hari ini kita belajar tentang rangka. Coba bayangkan sebuah rumah tanpa tiang dan kerangka: pasti roboh, bukan? Begitu juga tubuh kita. Tubuh manusia dewasa ditopang oleh 206 tulang yang saling berhubungan.","Supaya mudah dipelajari, para ahli membagi rangka menjadi dua kelompok besar: rangka aksial (sumbu tubuh) dan rangka apendikular (alat gerak). Yuk kita bahas satu per satu!"],
 points:[
  ["Fungsi Rangka","<b>1) Penopang</b> dan pemberi bentuk tubuh. <b>2) Pelindung</b> organ lunak (tengkorak melindungi otak, rusuk melindungi jantung dan paru-paru, ruas tulang belakang melindungi sumsum tulang belakang). <b>3) Alat gerak pasif</b>: tulang tidak bisa bergerak sendiri, ia digerakkan oleh otot (alat gerak aktif). <b>4) Tempat pembentukan sel darah</b> di sumsum tulang merah. <b>5) Tempat penyimpanan mineral</b> terutama kalsium dan fosfor."],
  ["Jumlah Tulang: 206 pada Orang Dewasa","Bayi yang baru lahir memiliki sekitar 270–300 tulang. Banyak di antaranya masih berupa tulang rawan dan beberapa tulang akan menyatu seiring pertumbuhan. Contohnya, lima ruas tulang kelangkang (sakrum) menyatu menjadi satu. Hasil akhirnya pada orang dewasa adalah 206 tulang."],
  ["Rangka Aksial (Sumbu Tubuh): 80 tulang","Terletak di sumbu tengah tubuh. Rinciannya: <b>tengkorak 29</b> (22 tulang tengkorak dan wajah + 6 tulang pendengaran + 1 tulang lidah/hyoid), <b>kolumna vertebralis 26</b>, <b>sternum 1</b>, dan <b>kostae/rusuk 24</b>. Jumlahnya: 29 + 26 + 1 + 24 = 80."],
  ["Rangka Apendikular (Alat Gerak): 126 tulang","Terdiri atas <b>gelang bahu 4</b> (klavikula dan skapula kiri-kanan), <b>anggota gerak atas 60</b> (30 tiap sisi), <b>gelang panggul 2</b> (tulang koksa kiri-kanan), dan <b>anggota gerak bawah 60</b> (30 tiap sisi). Jumlahnya: 4 + 60 + 2 + 60 = 126."],
  ["Trik Mengingat","Aksial = <i>axis</i> = poros/sumbu. Apendikular = <i>append</i> = tambahan yang 'menempel' pada poros, yaitu lengan dan tungkai beserta gelangnya."]
 ],
 fact:"Tulang paling kecil ada di telinga tengah (stapes, panjangnya ±3 mm), sedangkan tulang terpanjang adalah tulang paha (femur).",
 quiz:[
  {q:"Berapa jumlah tulang penyusun rangka aksial manusia dewasa?",o:["206","126","80","64"],a:2,e:"Rangka aksial = 80 tulang (tengkorak 29, kolumna vertebralis 26, sternum 1, rusuk 24)."},
  {q:"Manakah yang BUKAN fungsi sistem rangka?",o:["Menopang tubuh","Melindungi organ dalam","Tempat pencernaan makanan","Tempat pembentukan sel darah"],a:2,e:"Pencernaan makanan adalah tugas sistem pencernaan, bukan rangka."},
  {q:"Rangka apendikular meliputi...",o:["Sternum dan rusuk","Gelang bahu, gelang panggul, dan anggota gerak","Tengkorak dan tulang belakang","Tulang pendengaran saja"],a:1,e:"Apendikular = gelang bahu + anggota gerak atas + gelang panggul + anggota gerak bawah (126 tulang)."}
 ]
},
{
 id:"m2", ic:"💀", title:"Tulang Tengkorak", tag:"Rangka Aksial", model:"0fe81f7f5f7f446baeff81675455bb14",
 intro:["Anak-anak, sekarang kita pindah ke kepala. Tengkorak adalah 'helm alami' yang melindungi otak, mata, dan telinga bagian dalam. Tengkorak tersusun atas dua kelompok: tulang kranium (pembungkus otak) dan tulang wajah."],
 points:[
  ["Tulang Kranium (8 tulang)","<b>Frontal</b> (dahi, 1), <b>parietal</b> (ubun-ubun, 2), <b>temporal</b> (pelipis, 2), <b>oksipital</b> (belakang kepala, 1), <b>sfenoid</b> (1), dan <b>etmoid</b> (1). Pada oksipital ada lubang besar bernama <i>foramen magnum</i>, tempat sumsum tulang belakang menyambung ke otak."],
  ["Tulang Wajah (14 tulang)","Maksila/rahang atas (2), zigomatikum/tulang pipi (2), nasal/tulang hidung (2), lakrimal (2), palatina (2), konka nasal inferior (2), vomer (1), dan <b>mandibula/rahang bawah (1)</b>."],
  ["Sutura: Sendi Mati","Tulang-tulang tengkorak dihubungkan oleh <b>sutura</b> yang bergerigi dan tidak bisa digerakkan (sinartrosis). Pada bayi, sutura belum menyatu sehingga ada celah lunak yang disebut <i>fontanel</i> (ubun-ubun) agar kepala bisa melewati jalan lahir dan otak dapat berkembang."],
  ["Mandibula: Si Pengecualian","Dari seluruh tulang kepala, hanya mandibula yang dapat digerakkan, sehingga kita bisa mengunyah dan berbicara."]
 ],
 fact:"Tengkorak punya banyak lubang kecil (foramen) tempat saraf dan pembuluh darah lewat, dan bentuk melengkungnya membuatnya kuat menahan benturan.",
 quiz:[
  {q:"Berapa jumlah tulang kranium (pembungkus otak)?",o:["6","8","14","22"],a:1,e:"Kranium terdiri dari 8 tulang: 1 frontal, 2 parietal, 2 temporal, 1 oksipital, 1 sfenoid, 1 etmoid."},
  {q:"Hubungan antar tulang tengkorak berupa...",o:["Sendi engsel","Sendi peluru","Sutura (sendi mati)","Sendi putar"],a:2,e:"Tulang tengkorak dihubungkan oleh sutura yang tidak dapat digerakkan."},
  {q:"Satu-satunya tulang kepala yang dapat bergerak adalah...",o:["Frontal","Mandibula","Maksila","Oksipital"],a:1,e:"Mandibula (rahang bawah) bersendi dengan tulang temporal sehingga bisa digerakkan."}
 ]
},
{
 id:"m3", ic:"🧬", title:"Tulang Belakang", tag:"Rangka Aksial", model:"aeda10deb8534b4f9058d7729f842aaa",
 intro:["Selanjutnya kita bahas 'tiang utama' tubuh: tulang belakang atau kolumna vertebralis. Tulang ini tersusun dari ruas-ruas tulang (vertebra) yang ditumpuk dan menopang kepala, menjadi tempat melekat rusuk, serta melindungi sumsum tulang belakang."],
 points:[
  ["Pembagian Ruas (26 unit pada dewasa)","<b>Servikal (leher) 7 ruas</b>, <b>Torakal (dada) 12 ruas</b>, <b>Lumbal (pinggang) 5 ruas</b>, <b>Sakrum (kelangkang) 5 ruas menyatu = 1</b>, <b>Koksigeus (tulang ekor) 4 ruas menyatu = 1</b>. Jadi 7+12+5+1+1 = 26. Saat bayi jumlahnya 33 ruas."],
  ["Atlas dan Aksis","Ruas servikal pertama (<b>atlas</b>) menopang tengkorak dan memungkinkan kita mengangguk. Ruas kedua (<b>aksis</b>) punya tonjolan seperti gigi sehingga kita bisa menoleh ke kiri dan kanan (sendi putar)."],
  ["Bantalan Diskus Intervertebralis","Di antara dua ruas ada bantalan tulang rawan (diskus). Fungsinya sebagai <b>peredam kejut</b> sekaligus membuat punggung lentur. Hubungan antar ruas termasuk amfiartrosis (gerak terbatas)."],
  ["Lengkung Tulang Belakang","Dilihat dari samping, tulang belakang berbentuk huruf S: lordosis servikal dan lumbal (melengkung ke depan), kifosis torakal dan sakral (melengkung ke belakang). Lengkung ini membantu menahan beban tubuh."],
  ["Kelainan","<b>Skoliosis</b>: melengkung ke samping. <b>Kifosis</b>: punggung terlalu bungkuk. <b>Lordosis</b>: pinggang terlalu melengkung ke depan. Penyebab umumnya kebiasaan duduk salah dan membawa beban tidak seimbang."]
 ],
 fact:"Tinggi badan kita bisa berkurang sekitar 1 cm pada sore hari karena diskus tertekan seharian, lalu kembali saat kita tidur.",
 quiz:[
  {q:"Berapa jumlah ruas tulang servikal?",o:["5","7","12","4"],a:1,e:"Servikal (leher) = 7 ruas, torakal 12, lumbal 5."},
  {q:"Kelainan tulang belakang yang melengkung ke samping disebut...",o:["Kifosis","Lordosis","Skoliosis","Artritis"],a:2,e:"Skoliosis = tulang belakang melengkung ke samping (membentuk huruf S atau C)."},
  {q:"Fungsi utama diskus intervertebralis adalah...",o:["Menghasilkan sel darah","Bantalan peredam kejut","Menyimpan lemak","Menghubungkan otot ke tulang"],a:1,e:"Diskus berupa tulang rawan yang meredam kejut dan membuat tulang belakang lentur."}
 ]
},
{
 id:"m4", ic:"🛡️", title:"Tulang Dada (Sternum)", tag:"Rangka Aksial", model:"c80c041a460e4bcdb374b31480d6baa2",
 intro:["Sekarang letakkan tanganmu di tengah dadamu. Tulang pipih yang terasa itu adalah sternum, atau tulang dada. Bersama tulang rusuk, sternum membentuk sangkar yang melindungi jantung dan paru-paru."],
 points:[
  ["Tiga Bagian Sternum","Dari atas ke bawah: <b>manubrium</b> (bagian atas, tempat melekat tulang selangka dan rusuk pertama), <b>korpus/badan</b> (bagian tengah dan terpanjang, tempat melekat sebagian besar rusuk), dan <b>prosesus xifoideus</b> (ujung bawah yang kecil, awalnya tulang rawan lalu mengeras pada orang dewasa)."],
  ["Bentuk dan Fungsi","Sternum berbentuk pipih seperti belati dengan panjang ±15–17 cm. Fungsinya: melindungi jantung dan paru-paru, tempat melekat rusuk lewat tulang rawan kosta, dan menyimpan sumsum tulang merah untuk membentuk sel darah."],
  ["Kaitan dengan Pertolongan Pertama","Saat melakukan kompresi dada (RJP) pada orang yang henti jantung, penekanan dilakukan pada setengah bagian bawah sternum, di atas prosesus xifoideus, supaya jantung terperas dan darah tetap mengalir."]
 ],
 fact:"Sternum adalah salah satu tempat favorit dokter mengambil sampel sumsum tulang karena sumsum merahnya banyak.",
 quiz:[
  {q:"Tiga bagian sternum dari atas ke bawah adalah...",o:["Korpus – manubrium – xifoid","Manubrium – korpus – prosesus xifoideus","Xifoid – korpus – manubrium","Manubrium – xifoid – korpus"],a:1,e:"Urutannya: manubrium, korpus, prosesus xifoideus."},
  {q:"Organ yang dilindungi oleh sternum bersama rusuk adalah...",o:["Lambung dan usus","Ginjal dan hati","Jantung dan paru-paru","Otak"],a:2,e:"Sangkar dada melindungi jantung dan paru-paru."},
  {q:"Tulang rawan di ujung bawah sternum yang mengeras saat dewasa disebut...",o:["Manubrium","Prosesus xifoideus","Atlas","Akromion"],a:1,e:"Prosesus xifoideus terletak di ujung bawah sternum."}
 ]
},
{
 id:"m5", ic:"🫁", title:"Tulang Rusuk (Kostae)", tag:"Rangka Aksial", model:"8aad7e23de4241e4a44fa95063bf5b16",
 intro:["Anak-anak, tulang rusuk adalah 'jeruji' sangkar dada. Tulang ini berbentuk pipih dan melengkung. Bagian belakangnya melekat pada ruas tulang belakang torakal, dan bagian depannya terhubung ke sternum lewat tulang rawan."],
 points:[
  ["Jumlah: 12 Pasang (24 tulang)","Manusia, baik laki-laki maupun perempuan, memiliki 12 pasang rusuk. Mitos 'laki-laki kekurangan satu rusuk' tidak benar."],
  ["Tiga Jenis Rusuk","<b>Rusuk sejati</b> (pasangan 1–7) menempel langsung ke sternum melalui tulang rawan sendiri. <b>Rusuk palsu</b> (8–10) tulang rawannya menyatu dengan tulang rawan rusuk ke-7 sebelum ke sternum. <b>Rusuk melayang</b> (11–12) tidak menempel ke sternum sama sekali, ujung depannya bebas."],
  ["Peran dalam Pernapasan","Saat <b>inspirasi</b>, otot antar rusuk berkontraksi, rusuk terangkat dan rongga dada membesar sehingga udara masuk. Saat <b>ekspirasi</b>, rusuk turun, rongga dada mengecil, dan udara keluar. Jadi rangka juga ikut bekerja saat kita bernapas."],
  ["Cedera","Rusuk yang patah atau bergeser dapat melukai jaringan lunak dan membahayakan organ dada, sehingga harus segera ditangani tenaga medis."]
 ],
 fact:"Rusuk melayang disebut 'melayang' karena ujung depannya hanya tertanam di otot dinding perut, bukan menempel pada tulang lain.",
 quiz:[
  {q:"Berapa pasang rusuk sejati pada manusia?",o:["3 pasang","5 pasang","7 pasang","12 pasang"],a:2,e:"Rusuk sejati = pasangan 1–7."},
  {q:"Rusuk yang tidak berhubungan dengan sternum adalah...",o:["Rusuk sejati","Rusuk palsu","Rusuk melayang","Semua rusuk"],a:2,e:"Rusuk melayang (11–12) ujung depannya bebas."},
  {q:"Saat menarik napas (inspirasi), tulang rusuk akan...",o:["Turun","Terangkat","Menyatu","Patah"],a:1,e:"Rusuk terangkat sehingga rongga dada membesar dan udara masuk."}
 ]
},
{
 id:"m6", ic:"💪", title:"Rangka Anggota Gerak Atas", tag:"Rangka Apendikular", model:"05d55e8d9301498f82c5ba15d2fec53c",
 intro:["Sekarang kita masuk ke rangka apendikular. Mulai dari bahu hingga ujung jari, bagian ini membuat kita bisa menulis, melempar bola, bahkan mengetik pesan di ponsel. Anggota gerak atas terhubung ke badan melalui gelang bahu."],
 points:[
  ["Gelang Bahu","<b>Klavikula</b> (tulang selangka) berbentuk huruf S, menghubungkan lengan dengan sternum dan mudah patah saat terjatuh. <b>Skapula</b> (tulang belikat) berbentuk segitiga pipih di punggung atas, punya rongga sendi (glenoid) tempat kepala tulang lengan atas."],
  ["Lengan Atas dan Lengan Bawah","<b>Humerus</b> (tulang lengan atas) 1 buah. Lengan bawah punya 2 tulang: <b>radius</b> (pengumpil) di sisi ibu jari dan <b>ulna</b> (hasta) di sisi kelingking, yang ujung atasnya membentuk tonjolan siku (olekranon)."],
  ["Tangan: 27 tulang","<b>Karpal</b> (pergelangan tangan) 8 tulang, <b>metakarpal</b> (telapak tangan) 5 tulang, dan <b>falang</b> (ruas jari) 14 tulang. Ibu jari hanya punya 2 falang, jari lain masing-masing 3."],
  ["Hitungan Tiap Sisi","Humerus 1 + radius 1 + ulna 1 + karpal 8 + metakarpal 5 + falang 14 = 30 tulang per lengan. Ditambah 2 tulang gelang bahu, total 32 per sisi atau 64 untuk kedua sisi."]
 ],
 fact:"Kedua tangan kita memiliki 54 tulang, sekitar seperempat dari seluruh tulang tubuh, itulah sebabnya tangan sangat terampil.",
 quiz:[
  {q:"Nama lain tulang selangka adalah...",o:["Skapula","Klavikula","Humerus","Ulna"],a:1,e:"Klavikula = tulang selangka, skapula = tulang belikat."},
  {q:"Tulang lengan bawah yang berada di sisi kelingking adalah...",o:["Radius (pengumpil)","Ulna (hasta)","Humerus","Karpal"],a:1,e:"Ulna (hasta) di sisi kelingking, radius (pengumpil) di sisi ibu jari."},
  {q:"Jumlah ruas tulang jari (falang) pada satu tangan adalah...",o:["5","8","10","14"],a:3,e:"Satu tangan: 14 falang (ibu jari 2, empat jari lain masing-masing 3)."}
 ]
},
{
 id:"m7", ic:"🦵", title:"Rangka Anggota Gerak Bawah", tag:"Rangka Apendikular", model:"93500fc8cfcd4c24a35161b30db0a319",
 intro:["Terakhir untuk bagian rangka, kita bahas kaki. Anggota gerak bawah menahan seluruh berat badan sehingga tulangnya lebih besar dan kuat dibanding tulang lengan. Anggota gerak bawah terhubung dengan badan lewat gelang panggul."],
 points:[
  ["Gelang Panggul","Tiap tulang koksa terbentuk dari tiga tulang yang menyatu: <b>ilium</b> (tulang usus, bagian atas yang lebar), <b>iskium</b> (tulang duduk, bagian bawah belakang), dan <b>pubis</b> (tulang kemaluan, bagian depan). Tempat sendi pinggul disebut asetabulum. Panggul perempuan lebih lebar untuk proses persalinan."],
  ["Tungkai Atas dan Bawah","<b>Femur</b> (tulang paha) adalah tulang terpanjang dan terkuat. <b>Patela</b> (tempurung lutut) melindungi sendi lutut. Di tungkai bawah ada <b>tibia</b> (tulang kering, besar, menopang berat badan) dan <b>fibula</b> (tulang betis, kecil, di sisi luar)."],
  ["Kaki: 26 tulang","<b>Tarsal</b> (pergelangan kaki) 7 tulang, termasuk talus dan kalkaneus (tulang tumit), <b>metatarsal</b> (telapak kaki) 5 tulang, dan <b>falang</b> (jari kaki) 14 tulang."],
  ["Hitungan Tiap Sisi","Femur 1 + patela 1 + tibia 1 + fibula 1 + tarsal 7 + metatarsal 5 + falang 14 = 30 tulang per tungkai. Ditambah 1 tulang koksa menjadi 31 per sisi atau 62 total. Gabungkan dengan 64 tulang anggota atas, hasilnya 126 tulang apendikular."]
 ],
 fact:"Tulang femur mampu menahan beban hingga beberapa kali berat badan saat kita berlari atau melompat.",
 quiz:[
  {q:"Tulang terpanjang dan terkuat dalam tubuh manusia adalah...",o:["Tibia","Fibula","Femur","Humerus"],a:2,e:"Femur (tulang paha) adalah tulang terpanjang dan terkuat."},
  {q:"Tempurung lutut dalam istilah ilmiah disebut...",o:["Tarsal","Patela","Tibia","Iskium"],a:1,e:"Patela = tempurung lutut."},
  {q:"Tiga tulang penyusun gelang panggul adalah...",o:["Femur, tibia, fibula","Klavikula, skapula, humerus","Ilium, iskium, pubis","Tarsal, metatarsal, falang"],a:2,e:"Gelang panggul (tulang koksa) = ilium + iskium + pubis."}
 ]
},
{
 id:"m8", ic:"🔬", title:"Jenis Jaringan Tulang", tag:"Histologi", model:null,
 intro:["Sekarang kita lihat 'bahan bangunan' rangka. Ternyata tulang bukan benda mati, lho. Tulang adalah jaringan hidup yang terus dibentuk dan diperbarui. Ada dua jenis jaringan penyusun rangka: tulang rawan dan tulang keras."],
 points:[
  ["Tulang Rawan (Kartilago)","Bersifat lentur karena matriksnya mengandung serat kolagen. Ada 3 jenis: <b>hialin</b> (ujung tulang pada sendi, hidung, saluran napas), <b>elastis</b> (daun telinga, epiglotis), dan <b>fibrosa</b> (diskus antar ruas tulang belakang). Tulang rawan tidak memiliki pembuluh darah sehingga penyembuhannya lambat."],
  ["Tulang Keras (Osteon)","Matriksnya mengandung kalsium fosfat sehingga keras. <b>Tulang kompak</b> padat dan kuat, ada di bagian luar dan batang tulang, dengan unit sistem Havers. <b>Tulang spons</b> berongga seperti spons, ada di ujung tulang panjang dan berisi sumsum merah."],
  ["Sel-sel Penyusun","<b>Osteoblas</b> membentuk tulang baru. <b>Osteosit</b> adalah osteoblas dewasa yang menjaga jaringan tulang. <b>Osteoklas</b> menghancurkan (meresorpsi) tulang tua. Keseimbangan ketiganya menjaga kekuatan tulang."],
  ["Proses Osifikasi","Osifikasi adalah pembentukan tulang dari tulang rawan. Pada osifikasi <b>endokondral</b>, tulang rawan digantikan tulang keras (contoh: tulang panjang). Pada osifikasi <b>intramembranosa</b> (desmal), tulang terbentuk langsung dari jaringan ikat (contoh: tulang pipih tengkorak)."],
  ["Lapisan dan Sumsum","Tulang dibungkus <b>periosteum</b> (selaput tulang). <b>Sumsum merah</b> membentuk sel darah, <b>sumsum kuning</b> menyimpan lemak. Untuk menjaga tulang tetap sehat kita butuh kalsium, fosfor, vitamin D, dan aktivitas fisik."]
 ],
 fact:"Tulang tubuh kita diperbarui terus-menerus; seluruh rangka kira-kira digantikan baru setiap sekitar 10 tahun.",
 quiz:[
  {q:"Sel yang bertugas membentuk jaringan tulang baru adalah...",o:["Osteoklas","Osteoblas","Eritrosit","Leukosit"],a:1,e:"Osteoblas membentuk tulang, osteoklas menghancurkan tulang tua."},
  {q:"Tulang rawan elastis dapat ditemukan pada...",o:["Daun telinga","Batang femur","Tengkorak","Ujung ruas jari saja"],a:0,e:"Tulang rawan elastis ada di daun telinga dan epiglotis."},
  {q:"Sumsum tulang merah berfungsi untuk...",o:["Menyimpan lemak","Membentuk sel darah","Menopang tubuh","Melumasi sendi"],a:1,e:"Sumsum merah menghasilkan sel darah merah, sel darah putih, dan keping darah."}
 ]
},
{
 id:"m9", ic:"⚙️", title:"Persendian (Artikulasi)", tag:"Hubungan Antar Tulang", model:null,
 intro:["Anak-anak, kalau tulang itu keras dan kaku, bagaimana kita bisa menekuk siku atau menoleh? Jawabannya ada pada persendian atau artikulasi, yaitu hubungan antara dua tulang atau lebih."],
 points:[
  ["Jenis Sendi Menurut Gerakannya","<b>Sinartrosis</b>: tidak dapat bergerak (sutura tengkorak). <b>Amfiartrosis</b>: gerak terbatas (antar ruas tulang belakang, tulang rusuk dengan sternum, simfisis pubis). <b>Diartrosis</b>: gerak bebas (sendi sinovial, misalnya bahu, siku, lutut)."],
  ["Macam-macam Diartrosis","<b>Sendi engsel</b>: gerak satu arah (siku, lutut, jari). <b>Sendi peluru</b>: gerak ke segala arah (bahu, pinggul). <b>Sendi putar</b>: gerak memutar (atlas-aksis, radius-ulna). <b>Sendi pelana</b>: gerak dua arah (pangkal ibu jari). <b>Sendi luncur</b>: bergeser (antar tulang pergelangan tangan dan kaki)."],
  ["Struktur Sendi Sinovial","<b>Tulang rawan sendi</b> melapisi ujung tulang, <b>kapsul sendi</b> membungkus sendi, <b>cairan sinovial</b> berfungsi sebagai pelumas pengurang gesekan, dan <b>ligamen</b> (urat sendi) menghubungkan tulang dengan tulang."],
  ["Gangguan pada Sendi","<b>Dislokasi</b>: tulang bergeser dari posisinya. <b>Terkilir (sprain)</b>: ligamen robek atau teregang. <b>Artritis</b>: peradangan sendi, menyebabkan nyeri dan kaku. Bedakan: ligamen menghubungkan tulang dengan tulang, sedangkan <b>tendon</b> menghubungkan otot dengan tulang."]
 ],
 fact:"Bunyi 'krek' saat jari ditekuk umumnya berasal dari gelembung gas kecil dalam cairan sinovial, biasanya tidak berbahaya.",
 quiz:[
  {q:"Sendi pada tengkorak yang tidak dapat digerakkan disebut...",o:["Diartrosis","Amfiartrosis","Sinartrosis","Sendi peluru"],a:2,e:"Sinartrosis = sendi mati, contohnya sutura tengkorak."},
  {q:"Sendi pada bahu dan pinggul termasuk sendi...",o:["Engsel","Peluru","Putar","Luncur"],a:1,e:"Sendi peluru memungkinkan gerak ke segala arah."},
  {q:"Fungsi cairan sinovial adalah...",o:["Membentuk sel darah","Menghubungkan otot dengan tulang","Melumasi sendi agar gesekan berkurang","Menambah kekerasan tulang"],a:2,e:"Cairan sinovial berfungsi sebagai pelumas sendi."}
 ]
}
];

/* Pesan umpan balik */
const FB_OK=[
 {f:1,t:"Hebat! Jawabanmu tepat sekali! 🎉"},{f:8,t:"Yes! Kamu benar-benar paham materinya!"},
 {f:15,t:"Keren! Pertahankan semangat belajarmu ✨"},{f:2,t:"Mantap! Satu poin untukmu!"},{f:6,t:"Luar biasa! Lanjut ke soal berikutnya!"}];
const FB_NO=[
 {f:7,t:"Belum tepat, tapi jangan menyerah ya. Baca penjelasannya!"},{f:11,t:"Hmm, coba perhatikan lagi penjelasannya."},
 {f:3,t:"Ups! Tidak apa-apa, salah itu bagian dari belajar."}];
const FB_END=[
 {min:100,f:15,s:"⭐⭐⭐",t:"Sempurna! Kamu menguasai materi ini dengan sangat baik!"},
 {min:67,f:1,s:"⭐⭐☆",t:"Bagus sekali! Sedikit lagi menuju sempurna."},
 {min:34,f:0,s:"⭐☆☆",t:"Cukup baik. Baca materinya sekali lagi lalu coba ulangi kuisnya."},
 {min:0,f:7,s:"☆☆☆",t:"Jangan patah semangat! Pelajari lagi materinya, kamu pasti bisa."}];
