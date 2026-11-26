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

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I finally cleaned my room — the dust bunnies formed a union and are demanding overtime pay.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

console.log(ENTRY);
console.log(`characters: ${ENTRY.length}`);
