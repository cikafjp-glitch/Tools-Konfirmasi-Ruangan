(function (global) {
  var LANG_CODES = ['id', 'en', 'nl', 'cn', 'fr', 'de', 'kr'];
  var HTML_LANG = { id: 'id', en: 'en', nl: 'nl', cn: 'zh-CN', fr: 'fr', de: 'de', kr: 'ko' };

  var STR = {
    id: {
      pageTitle: 'Konfirmasi Peminjaman Ruangan',
      topbarTitle: 'Tools Konfirmasi Ruangan',
      settings: 'Pengaturan',
      settingsNotesTitle: 'Pengaturan catatan',
      close: 'Tutup',
      stepUpload: 'Upload file',
      stepSelect: 'Pilih jadwal',
      stepSend: 'Kirim konfirmasi',
      uploadData: 'Upload data',
      roomBooking: 'Room Booking',
      eventRequest: 'Event Request',
      uploadRoomTitle: 'Upload Room Booking',
      uploadRoomSub: 'Pilih file Excel Room Booking',
      uploadEventTitle: 'Upload Event Request',
      uploadEventSub: 'Pilih file Excel Event Request',
      formatXlsx: 'Format .xlsx / .xls',
      notUploaded: 'Belum diupload',
      statusReadySuffix: 'siap',
      fileReady: '{name} — siap',
      uploadBothComplete: 'Kedua file sudah lengkap. Semua acara dari kedua file siap dibuat menjadi card.',
      uploadRoomPartial: 'Room Booking sudah diupload. Semua acara dari file ini dapat dilanjutkan.',
      uploadEventPartial: 'Event Request sudah diupload. Semua acara dari file ini dapat dilanjutkan.',
      uploadMissingFile: 'File {type} belum diupload. Kamu tetap bisa melanjutkan hanya dengan file yang tersedia.',
      uploadNeedOne: 'Upload minimal satu file untuk melanjutkan.',
      continue: 'Lanjutkan',
      continueOneFile: 'Lanjutkan dengan 1 file',
      schedulesFound: 'jadwal ditemukan',
      doneLabel: 'selesai',
      selectedLabel: 'dipilih',
      changeFile: 'Ganti file',
      searchPlaceholder: 'Cari acara, PIC, ruangan, atau deskripsi...',
      selBarOne: '1 jadwal dipilih — klik "Buat konfirmasi" atau pilih lebih banyak',
      selBarMany: '{count} jadwal dipilih',
      clearSelection: 'Batal pilih',
      makeConfirmation: 'Buat konfirmasi',
      emptyNoData: 'Tidak ada data peminjaman ditemukan.',
      emptyNoSearch: 'Tidak ada jadwal yang cocok dengan pencarian.',
      untitledEvent: '(tanpa nama)',
      badgeWa: 'No. WA',
      pendingApproval: '⚠ Pending Approval',
      statusPrefix: 'Status:',
      showDesc: 'Lihat deskripsi',
      hideDesc: 'Sembunyikan deskripsi',
      markDone: 'Selesai',
      markDoneTitle: 'Tandai selesai',
      timezone: 'WIB',
      peopleSuffix: ' orang',
      formTitleSingle: 'Detail konfirmasi',
      formTitleMulti: 'Detail konfirmasi ({count} acara)',
      addEvent: 'Tambah Acara',
      senderSection: 'Pengirim & catatan penutup',
      globalNote: 'Catatan',
      globalNotePh: 'Catatan penutup (opsional, muncul setelah semua acara)',
      initials: 'Inisial',
      initialsPh: 'cth: TN',
      initialsHint: 'Muncul sebagai',
      initialsHintCode: '-TN-',
      initialsHintEnd: 'di akhir pesan',
      waSection: 'Kirim ke WhatsApp PIC',
      waPhonePh: '81234567890 (tanpa angka 0 di depan)',
      waAutoDetected: 'Nomor terdeteksi otomatis dari deskripsi',
      previewLabel: 'Preview pesan',
      openWa: 'Buka WhatsApp',
      copyMsg: 'Salin pesan',
      markAllDone: 'Tandai Semua Dipilih Selesai',
      backToList: 'Kembali ke daftar',
      copySuccess: 'Pesan berhasil disalin!',
      confirmTitle: 'Konfirmasi',
      confirmMarkDone: 'Tandai {count} acara yang dipilih sebagai selesai?',
      cancel: 'Batal',
      confirmYesMarkDone: 'Ya, tandai selesai',
      markDoneSuccess: '{count} acara berhasil ditandai selesai.',
      alertTitle: 'Perhatian',
      alertOk: 'Mengerti',
      alertUploadOneExcel: 'Harap upload tepat satu file berformat .xlsx atau .xls.',
      alertUploadExcelFormat: 'Harap upload file Excel berformat .xlsx atau .xls',
      alertExcelLibrary: 'Library Excel belum termuat. Silakan refresh halaman lalu coba lagi.',
      alertNoSheet: 'Workbook Excel tidak memiliki sheet.',
      alertWrongRoom: 'File ini bukan format Room Booking. Silakan pilih file Room Booking.',
      alertWrongEvent: 'File ini bukan format Event Request. Silakan pilih file Event Request.',
      alertReadFailed: 'Gagal membaca file: {detail}',
      alertReadFailedFallback: 'Pastikan file Excel tidak rusak.',
      alertReadGeneric: 'Gagal membaca file.',
      alertNeedFile: 'Silakan upload minimal satu file terlebih dahulu.',
      alertNoRows: 'File yang diupload sudah terbaca, tetapi tidak ditemukan baris jadwal yang lengkap.',
      alertNeedWa: 'Masukkan nomor WA PIC terlebih dahulu.',
      alertNoMarkDone: 'Tidak ada acara yang bisa ditandai selesai.',
      settingsOptionalHeading: 'Catatan opsional standar',
      settingsOptionalHelp: 'Teks ini akan ditawarkan sebagai checkbox di Review untuk ruangan yang dipilih di bawah. Jika checkbox tidak dicentang, catatan tidak dimasukkan ke pesan WhatsApp.',
      settingsChapelHeading: 'Catatan default Chapel',
      settingsChapelHelp: 'Catatan ini otomatis dicantumkan untuk semua ruangan yang namanya berakhir dengan "Chapel". Tidak perlu dicentang di Review.',
      settingsRoomsHeading: 'Ruangan yang menggunakan catatan opsional',
      settingsRoomsHelp: 'Centang ruangan yang ingin menampilkan opsi catatan standar di Review. Pengaturan ini tidak memengaruhi catatan default Chapel.',
      resetDefault: 'Kembalikan default',
      save: 'Simpan',
      settingsSaved: 'Pengaturan catatan berhasil disimpan.',
      previewOptional: 'Preview:',
      previewChapel: 'Preview default Chapel:',
      previewEmpty: '(kosong)',
      eventN: 'Acara {n}',
      removeEventTitle: 'Hapus acara ini',
      descReference: 'Deskripsi dari sistem (referensi)',
      optionalNoteCheckbox: 'Tambahkan catatan opsional',
      chapelNoteLocked: 'Catatan default Chapel',
      fldEvent: 'Acara',
      fldLocation: 'Lokasi',
      fldDate: 'Hari/tgl',
      fldTime: 'Pukul',
      fldParticipants: 'Peserta',
      fldParticipantsPh: 'Contoh: 30 orang',
      fldExtraNotes: 'Catatan tambahan',
      fldExtraNotesPh: 'Kebutuhan tambahan, dll. (opsional)',
      previewDash: '—',
      defaultOptionalNote: 'Mohon dibantu selesai acara pada hari H, dapat diinformasikan kembali kepada kami untuk realisasi kehadiran peserta yang datang',
      defaultChapelNote: 'Mohon untuk tidak makan di dalam Ruang Chapel',
      msgShalom: 'Shalom',
      msgMorning: 'Selamat Pagi',
      msgNoon: 'Selamat Siang',
      msgAfternoon: 'Selamat Sore',
      msgEvening: 'Selamat Malam',
      msgIntro: 'Mengkonfirmasi sehubungan dengan peminjaman ruangan sebagai berikut :',
      msgFieldEvent: 'Acara',
      msgFieldLocation: 'Lokasi',
      msgFieldDate: 'Hari/tgl',
      msgFieldTime: 'Pukul',
      msgFieldParticipants: 'Peserta',
      msgFieldNotes: 'Catatan',
      msgPlaceholder: '...',
      msgAskNoChange: 'Apakah jadwal tidak ada perubahan?',
      msgPleaseConfirm: 'Mohon konfirmasinya',
      msgThanks: 'Terima kasih',
      msgBlessing: 'Tuhan Yesus memberkati',
      days: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
      months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
      excelMonths: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    },
    en: {
      pageTitle: 'Room Booking Confirmation',
      topbarTitle: 'Room Confirmation Tool',
      settings: 'Settings',
      settingsNotesTitle: 'Note settings',
      close: 'Close',
      stepUpload: 'Upload file',
      stepSelect: 'Select schedule',
      stepSend: 'Send confirmation',
      uploadData: 'Upload data',
      roomBooking: 'Room Booking',
      eventRequest: 'Event Request',
      uploadRoomTitle: 'Upload Room Booking',
      uploadRoomSub: 'Choose Room Booking Excel file',
      uploadEventTitle: 'Upload Event Request',
      uploadEventSub: 'Choose Event Request Excel file',
      formatXlsx: 'Format .xlsx / .xls',
      notUploaded: 'Not uploaded yet',
      statusReadySuffix: 'ready',
      fileReady: '{name} — ready',
      uploadBothComplete: 'Both files are complete. All events from both files are ready to become cards.',
      uploadRoomPartial: 'Room Booking uploaded. All events from this file can proceed.',
      uploadEventPartial: 'Event Request uploaded. All events from this file can proceed.',
      uploadMissingFile: '{type} file is not uploaded yet. You can still continue with the available file only.',
      uploadNeedOne: 'Upload at least one file to continue.',
      continue: 'Continue',
      continueOneFile: 'Continue with 1 file',
      schedulesFound: 'schedules found',
      doneLabel: 'done',
      selectedLabel: 'selected',
      changeFile: 'Change file',
      searchPlaceholder: 'Search event, PIC, room, or description...',
      selBarOne: '1 schedule selected — click "Create confirmation" or select more',
      selBarMany: '{count} schedules selected',
      clearSelection: 'Clear selection',
      makeConfirmation: 'Create confirmation',
      emptyNoData: 'No booking data found.',
      emptyNoSearch: 'No schedules match your search.',
      untitledEvent: '(untitled)',
      badgeWa: 'WA No.',
      pendingApproval: '⚠ Pending Approval',
      statusPrefix: 'Status:',
      showDesc: 'View description',
      hideDesc: 'Hide description',
      markDone: 'Done',
      markDoneTitle: 'Mark as done',
      timezone: 'WIB',
      peopleSuffix: ' people',
      formTitleSingle: 'Confirmation details',
      formTitleMulti: 'Confirmation details ({count} events)',
      addEvent: 'Add event',
      senderSection: 'Sender & closing note',
      globalNote: 'Note',
      globalNotePh: 'Closing note (optional, appears after all events)',
      initials: 'Initials',
      initialsPh: 'e.g. TN',
      initialsHint: 'Appears as',
      initialsHintCode: '-TN-',
      initialsHintEnd: 'at the end of the message',
      waSection: 'Send to PIC WhatsApp',
      waPhonePh: '81234567890 (without leading 0)',
      waAutoDetected: 'Number auto-detected from description',
      previewLabel: 'Message preview',
      openWa: 'Open WhatsApp',
      copyMsg: 'Copy message',
      markAllDone: 'Mark all selected as done',
      backToList: 'Back to list',
      copySuccess: 'Message copied!',
      confirmTitle: 'Confirm',
      confirmMarkDone: 'Mark {count} selected events as done?',
      cancel: 'Cancel',
      confirmYesMarkDone: 'Yes, mark done',
      markDoneSuccess: '{count} events marked as done.',
      alertTitle: 'Attention',
      alertOk: 'Got it',
      alertUploadOneExcel: 'Please upload exactly one .xlsx or .xls file.',
      alertUploadExcelFormat: 'Please upload an Excel file in .xlsx or .xls format',
      alertExcelLibrary: 'Excel library is not loaded. Please refresh the page and try again.',
      alertNoSheet: 'Excel workbook has no sheets.',
      alertWrongRoom: 'This file is not Room Booking format. Please choose a Room Booking file.',
      alertWrongEvent: 'This file is not Event Request format. Please choose an Event Request file.',
      alertReadFailed: 'Failed to read file: {detail}',
      alertReadFailedFallback: 'Make sure the Excel file is not corrupted.',
      alertReadGeneric: 'Failed to read file.',
      alertNeedFile: 'Please upload at least one file first.',
      alertNoRows: 'The file was read, but no complete schedule rows were found.',
      alertNeedWa: 'Enter PIC WhatsApp number first.',
      alertNoMarkDone: 'No events can be marked as done.',
      settingsOptionalHeading: 'Standard optional note',
      settingsOptionalHelp: 'This text is offered as a checkbox in Review for selected rooms below. If unchecked, the note is not included in the WhatsApp message.',
      settingsChapelHeading: 'Default Chapel note',
      settingsChapelHelp: 'This note is automatically included for all rooms whose name ends with "Chapel". No checkbox needed in Review.',
      settingsRoomsHeading: 'Rooms using optional note',
      settingsRoomsHelp: 'Check rooms that should show the standard note option in Review. This does not affect the default Chapel note.',
      resetDefault: 'Reset to default',
      save: 'Save',
      settingsSaved: 'Note settings saved.',
      previewOptional: 'Preview:',
      previewChapel: 'Default Chapel preview:',
      previewEmpty: '(empty)',
      eventN: 'Event {n}',
      removeEventTitle: 'Remove this event',
      descReference: 'System description (reference)',
      optionalNoteCheckbox: 'Add optional note',
      chapelNoteLocked: 'Default Chapel note',
      fldEvent: 'Event',
      fldLocation: 'Location',
      fldDate: 'Day/date',
      fldTime: 'Time',
      fldParticipants: 'Participants',
      fldParticipantsPh: 'Example: 30 people',
      fldExtraNotes: 'Additional notes',
      fldExtraNotesPh: 'Extra needs, etc. (optional)',
      previewDash: '—',
      defaultOptionalNote: 'Please help finish the event on the day; inform us again about actual attendance',
      defaultChapelNote: 'Please do not eat inside the Chapel room',
      msgShalom: 'Shalom',
      msgMorning: 'Good morning',
      msgNoon: 'Good afternoon',
      msgAfternoon: 'Good afternoon',
      msgEvening: 'Good evening',
      msgIntro: 'Confirming the room booking details as follows:',
      msgFieldEvent: 'Event',
      msgFieldLocation: 'Location',
      msgFieldDate: 'Day/date',
      msgFieldTime: 'Time',
      msgFieldParticipants: 'Participants',
      msgFieldNotes: 'Notes',
      msgPlaceholder: '...',
      msgAskNoChange: 'Is the schedule unchanged?',
      msgPleaseConfirm: 'Please confirm',
      msgThanks: 'Thank you',
      msgBlessing: 'God bless you',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      excelMonths: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    }
  };

  function extendLang(code, base, overrides) {
    var out = {};
    var k;
    for (k in base) {
      if (Object.prototype.hasOwnProperty.call(base, k)) out[k] = base[k];
    }
    for (k in overrides) {
      if (Object.prototype.hasOwnProperty.call(overrides, k)) out[k] = overrides[k];
    }
    STR[code] = out;
  }

  extendLang('nl', STR.en, {
    pageTitle: 'Bevestiging ruimtereservering',
    topbarTitle: 'Tool ruimtebevestiging',
    settings: 'Instellingen',
    settingsNotesTitle: 'Notities instellen',
    close: 'Sluiten',
    stepSelect: 'Rooster kiezen',
    stepSend: 'Bevestiging versturen',
    notUploaded: 'Nog niet geüpload',
    continue: 'Doorgaan',
    continueOneFile: 'Doorgaan met 1 bestand',
    makeConfirmation: 'Bevestiging maken',
    alertOk: 'Begrepen',
    alertTitle: 'Let op',
    save: 'Opslaan',
    cancel: 'Annuleren',
    msgMorning: 'Goedemorgen',
    msgNoon: 'Goedemiddag',
    msgAfternoon: 'Goedemiddag',
    msgEvening: 'Goedenavond',
    msgThanks: 'Bedankt',
    msgBlessing: 'God zegene u',
    days: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
    months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
  });

  extendLang('cn', STR.en, {
    pageTitle: '房间预订确认',
    topbarTitle: '房间确认工具',
    settings: '设置',
    settingsNotesTitle: '备注设置',
    close: '关闭',
    stepUpload: '上传文件',
    stepSelect: '选择日程',
    stepSend: '发送确认',
    notUploaded: '尚未上传',
    continue: '继续',
    continueOneFile: '仅用一个文件继续',
    makeConfirmation: '创建确认',
    alertOk: '知道了',
    alertTitle: '请注意',
    save: '保存',
    cancel: '取消',
    msgMorning: '早上好',
    msgNoon: '中午好',
    msgAfternoon: '下午好',
    msgEvening: '晚上好',
    msgThanks: '谢谢',
    msgBlessing: '愿上帝赐福',
    days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  });

  extendLang('fr', STR.en, {
    pageTitle: 'Confirmation de réservation de salle',
    topbarTitle: 'Outil de confirmation de salle',
    settings: 'Paramètres',
    settingsNotesTitle: 'Paramètres des notes',
    close: 'Fermer',
    stepSelect: 'Choisir le planning',
    stepSend: 'Envoyer la confirmation',
    notUploaded: 'Pas encore téléversé',
    continue: 'Continuer',
    continueOneFile: 'Continuer avec 1 fichier',
    makeConfirmation: 'Créer la confirmation',
    alertOk: 'Compris',
    alertTitle: 'Attention',
    save: 'Enregistrer',
    cancel: 'Annuler',
    msgMorning: 'Bonjour',
    msgNoon: 'Bon après-midi',
    msgAfternoon: 'Bon après-midi',
    msgEvening: 'Bonsoir',
    msgThanks: 'Merci',
    msgBlessing: 'Que Dieu vous bénisse',
    days: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    months: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  });

  extendLang('de', STR.en, {
    pageTitle: 'Raumbuchungsbestätigung',
    topbarTitle: 'Raumbestätigung-Tool',
    settings: 'Einstellungen',
    settingsNotesTitle: 'Notiz-Einstellungen',
    close: 'Schließen',
    stepSelect: 'Termin auswählen',
    stepSend: 'Bestätigung senden',
    notUploaded: 'Noch nicht hochgeladen',
    continue: 'Weiter',
    continueOneFile: 'Mit 1 Datei fortfahren',
    makeConfirmation: 'Bestätigung erstellen',
    alertOk: 'Verstanden',
    alertTitle: 'Hinweis',
    save: 'Speichern',
    cancel: 'Abbrechen',
    msgMorning: 'Guten Morgen',
    msgNoon: 'Guten Tag',
    msgAfternoon: 'Guten Tag',
    msgEvening: 'Guten Abend',
    msgThanks: 'Danke',
    msgBlessing: 'Gott segne Sie',
    days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
  });

  extendLang('kr', STR.en, {
    pageTitle: '룸 예약 확인',
    topbarTitle: '룸 확인 도구',
    settings: '설정',
    settingsNotesTitle: '메모 설정',
    close: '닫기',
    stepUpload: '파일 업로드',
    stepSelect: '일정 선택',
    stepSend: '확인 전송',
    notUploaded: '아직 업로드되지 않음',
    continue: '계속',
    continueOneFile: '파일 1개로 계속',
    makeConfirmation: '확인 만들기',
    alertOk: '확인',
    alertTitle: '주의',
    save: '저장',
    cancel: '취소',
    msgMorning: '좋은 아침입니다',
    msgNoon: '좋은 오후입니다',
    msgAfternoon: '좋은 오후입니다',
    msgEvening: '좋은 저녁입니다',
    msgThanks: '감사합니다',
    msgBlessing: '하나님의 축복이 있기를',
    days: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
  });

  var currentLang = 'id';

  function t(key, vars) {
    var pack = STR[currentLang] || STR.en;
    var s = pack[key];
    if (s == null) s = STR.en[key];
    if (s == null) s = STR.id[key];
    if (s == null) s = key;
    if (vars) {
      Object.keys(vars).forEach(function (vk) {
        s = String(s).split('{' + vk + '}').join(String(vars[vk]));
      });
    }
    return s;
  }

  function getDays() {
    return (STR[currentLang] || STR.en).days || STR.id.days;
  }

  function getMonths() {
    return (STR[currentLang] || STR.en).months || STR.id.months;
  }

  function getExcelMonths() {
    return (STR[currentLang] || STR.en).excelMonths || STR.id.excelMonths;
  }

  function applyStaticI18n() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (key) el.setAttribute('placeholder', t(key));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-title');
      if (key) el.setAttribute('title', t(key));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (key) el.setAttribute('aria-label', t(key));
    });
    var listSuffix = document.getElementById('listCountSuffix');
    if (listSuffix) listSuffix.textContent = t('schedulesFound');
    var doneSuffix = document.getElementById('doneCountSuffix');
    if (doneSuffix) doneSuffix.textContent = t('doneLabel');
    var selSuffix = document.getElementById('selCountSuffix');
    if (selSuffix) selSuffix.textContent = t('selectedLabel');
  }

  function setLanguage(lang) {
    if (LANG_CODES.indexOf(lang) === -1) return;
    currentLang = lang;
    document.documentElement.lang = HTML_LANG[lang] || lang;
    document.title = t('pageTitle');
    applyStaticI18n();
    if (typeof global.__refreshToolLanguage === 'function') {
      global.__refreshToolLanguage();
    }
  }

  global.ToolI18n = {
    LANG_CODES: LANG_CODES,
    t: t,
    getDays: getDays,
    getMonths: getMonths,
    getExcelMonths: getExcelMonths,
    applyStaticI18n: applyStaticI18n,
    setLanguage: setLanguage,
    getLanguage: function () { return currentLang; }
  };

  global.__setToolLanguage = setLanguage;
  if (global.__pendingToolLanguage) setLanguage(global.__pendingToolLanguage);
})(window);