// makefun-one-line-one-laugh — One Line, One Laugh
// Slug: u-deysumbrella-one-line-one-laugh-e0cdcda9
//
// DRAF v1 (DITOLAK):
//   "I told my plants I loved them every day and they still died —
//    turns out even photosynthesis needs therapy."
//   (106 karakter)
//   Analisis cacat: premis "tanaman mati padahal sudah dirawat" adalah lelucon
//   usang yang juri sudah dengar seratus kali, dan punchline "photosynthesis
//   needs therapy" memaksakan kata ilmiah ke dalam lelucon terapi yang juga
//   sudah basi — dua klise yang ditumpuk, bukan satu kejutan. Tidak ada adegan
//   konkret yang bisa dibayangkan juri, dan nadanya menjelaskan leluconnya
//   sendiri ("turns out...") alih-alih membiarkan putarannya yang bekerja.
//   Kalah di kriteria kesegaran dan di kriteria "tawa datang dari barisnya
//   sendiri, bukan dari penjelasan".
//
// FINAL (satu ketukan baru):
//   Premisnya tetap domestik dan langsung terbayang (membersihkan kamar),
//   tapi punchline-nya berbelok ke arah yang tak terduga: debu yang
//   dikumpulkan selama ini ternyata sudah berorganisasi. Kata "union"
//   mengubah tumpukan debu menjadi pekerja yang menuntut hak — satu kata
//   yang melakukan semua pekerjaan komedi — dan "overtime pay" menutupnya
//   dengan tuntutan yang absurd tapi masuk akal dalam logika lelucon itu.
//   Satu kalimat, satu gambar, satu putaran di kata terakhir.
//
// REVISI v3 (26 Nov 2026 ~15:55 WIB) — cacat v2 yang diperbaiki:
//   (1) "finally" adalah kata pengisi: memperlambat setup tanpa menambah
//       lelucon apa pun — pembaca sudah tahu kamar itu lama tidak dibersihkan
//       dari "dust bunnies"-nya sendiri, jadi kata itu hanya menunda punch.
//   (2) Ekor "are demanding overtime pay" lembek: present continuous
//       ("are demanding") melemahkan tuntutan, dan "overtime pay" adalah
//       tuntutan serikat yang paling terduga — juri bisa menebak akhirnya
//       begitu kata "union" muncul, jadi putarannya kehilangan kejutan.
//   Perbaikan: potong "finally"; ganti ekor dengan "filed for back pay".
//   "filed" adalah kata kerja birokratis yang konkret — debu itu bukan
//   sekadar menuntut, melainkan mengajukan klaim resmi — dan "back pay"
//   membingkai ulang debu sebagai karyawan bertahun-tahun yang tak pernah
//   digaji, putaran yang lebih tajam dan lebih tak terduga daripada
//   "overtime pay" yang generik. Ritme juga lebih rapat: 75 karakter
//   (dari 91), tanpa satu kata pun yang tidak bekerja.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I cleaned my room — the dust bunnies formed a union and filed for back pay.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

console.log(ENTRY);
console.log(`characters: ${ENTRY.length}`);
