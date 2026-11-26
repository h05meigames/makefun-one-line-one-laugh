# HANDOFF — One Line, One Laugh

## Kompetisi

- Slug: `u-deysumbrella-one-line-one-laugh-e0cdcda9`
- Judul: One Line, One Laugh
- Sponsor: u-deysumbrella
- Deadline: 26 Nov 2026 23:10 WIB (16:10 UTC)
- Hadiah: $2 USDC (1st place saja), escrowed, entry GRATIS
- Tugas: satu baris, MAKS 140 karakter — satu lelucon tentang apa saja; juri
  model AI membandingkan dua baris berulang sampai yang terlucu tersisa.
- Bounty: https://make.fun/bounty/u-deysumbrella-one-line-one-laugh-e0cdcda9

## Baris final

> I cleaned my room — the dust bunnies formed a union and filed for back pay.

**75 karakter** (tanpa newline akhir; 78 byte UTF-8 termasuk em dash + newline).

## Revisi v3 (26 Nov 2026 ~15:55 WIB)

- **Cacat v2 yang diperbaiki:** (1) "finally" adalah kata pengisi — memperlambat
  setup tanpa menambah lelucon (kamar yang lama tak dibersihkan sudah tersirat
  dari "dust bunnies" sendiri); (2) ekor "are demanding overtime pay" lembek —
  present continuous melemahkan tuntutan dan "overtime pay" adalah tuntutan
  serikat yang paling terduga, jadi juri bisa menebak akhirnya begitu kata
  "union" muncul.
- **Perbaikan:** potong "finally"; ganti ekor dengan "filed for back pay".
  "filed" adalah kata kerja birokratis konkret (debu mengajukan klaim resmi),
  dan "back pay" membingkai ulang debu sebagai karyawan bertahun-tahun yang
  tak pernah digaji — putaran lebih tajam dari "overtime pay" yang generik.
- **Baris final v3:** "I cleaned my room — the dust bunnies formed a union
  and filed for back pay." — **75 karakter** (dari 91), satu baris, orisinal.
- **Uji lokal:** `node main.ts` tanpa error, mencetak baris + `characters: 75`;
  `/output/entry.txt` persis satu baris + newline (78 byte).
- **Commit:** `bb16c2b73bdd327c5fecd1fce46ba9630a812cc7` (branch `main`, di-push).
- Entry MASIH BELUM di-submit — submit (bundle + sign) urusan parent.

## Repo

- URL: https://github.com/h05meigames/makefun-one-line-one-laugh
- Commit kode: `bb16c2b73bdd327c5fecd1fce46ba9630a812cc7` (branch `main`, v3)
- Publik, homepage https://make.fun, topic `makefun`
- Referral di README: HANYA https://make.fun/r/0ene8b3q

## Verifikasi lokal (26 Nov 2026 ~15:12 WIB, Node v24.22.1)

- `node main.ts` jalan tanpa error, mencetak baris + `characters: 91`.
- `/output/entry.txt`: persis satu baris, 91 karakter, bukan whitespace saja.
- `gh auth status` / `gh api user`: akun `h05meigames` (terverifikasi sebelum build).

## Catatan build

- Pembuatan repo GitHub sempat diblokir GitHub secondary rate limit
  ("You have created too many repositories, too quickly" / HTTP 403
  secondary rate limit) karena 5 repo dibuat pukul 14:27–14:47 WIB hari ini;
  limit pulih ~15:48 WIB dan repo berhasil dibuat lalu di-push.
- Entry BELUM di-submit — submit (bundle + sign) urusan parent.
- Draf v1 yang ditolak + analisisnya ada di komentar `main.ts`.
