(function () {
  "use strict";

  var lang = localStorage.getItem("photos3_lang") || "tr";
  var L = {
    tr: {
      home: "Anasayfa",
      selectAll: "Tümünü seç",
      gridSize: "Grid boyutu",
      gridSmall: "Küçük",
      gridMedium: "Orta",
      gridLarge: "Büyük",
      options: "Seçenekler",
      sort: "Sıralama",
      sortAZ: "A → Z",
      sortZA: "Z → A",
      logout: "Çıkış",
      loading: "Yükleniyor...",
      selected: "seçili",
      download: "İndir",
      copy: "Kopyala",
      clear: "Seçimi temizle",
      delete: "Sil",
      addToSelection: "Seçime ekle",
      selectAllPhotos: "Tümünü seç",
      deleteTitle: "Fotoğrafları sil",
      deleteConfirm1: "1 fotoğrafı silmek istediğinize emin misiniz?",
      deleteConfirmN: "fotoğrafı silmek istediğinize emin misiniz?",
      deleteFolderTitle: "Klasörü sil",
      deleteFolderConfirm: "Bu klasör ve içindeki tüm dosyalar silinecek. Devam?",
      folderDeleted: "Klasör silindi",
      deleteWarning: "Bu işlem geri alınamaz.",
      cancel: "İptal",
      photos: "fotoğraf",
      items: "öğe",
      copied: "panoya kopyalandı",
      copiedFirst: "fotoğraftan ilki panoya kopyalandı",
      copyFailed: "Panoya kopyalama başarısız",
      copyImagesOnly: "Kopyalama sadece fotoğraflar için geçerli.",
      deleted: "fotoğraf silindi",
      deleteFailed: "Silme hatası",
      credTitle: "S3 Media Viewer",
      credDesc: "Yetkiniz olan S3 bucket'larına erişim için AWS bilgilerinizi girin.",
      saveLogin: "Kaydet ve Giriş Yap",
      clearCreds: "Kayıtlı bilgileri sil",
      selectBucket: "Bucket seçin",
      selectBucketDesc: "Bucket adını yazın.",
      changeBucket: "Bucket değiştir",
      newFolder: "+ Klasör",
      newFolderTitle: "Yeni klasör",
      upload: "↑ Yükle",
      uploadTitle: "Yükle",
      uploadModalDesc: "Dosya veya klasör seçerek mevcut konuma yükleyin.",
      selectFiles: "Dosya seç",
      selectFolder: "Klasör seç",
      folderNamePlaceholder: "Klasör adı",
      create: "Oluştur",
      folderCreated: "Klasör oluşturuldu",
      uploadSuccess: "yüklendi",
      uploadFailed: "Yükleme hatası",
      retry: "Tekrar dene",
      go: "Git",
      enterBucketName: "Bucket adı",
      bucketPlaceholder: "bucket-adi",
      fileProtocolHint: "Dosyayı doğrudan açıyorsanız (file://) bu hata oluşur. Uygulamayı HTTP üzerinden sunun: terminalde proje klasöründe 'npx serve' veya 'python -m http.server 8000' çalıştırın.",
    },
    en: {
      home: "Home",
      selectAll: "Select all",
      gridSize: "Grid size",
      gridSmall: "Small",
      gridMedium: "Medium",
      gridLarge: "Large",
      options: "Options",
      sort: "Sort",
      sortAZ: "A → Z",
      sortZA: "Z → A",
      logout: "Logout",
      loading: "Loading...",
      selected: "selected",
      download: "Download",
      copy: "Copy",
      clear: "Clear selection",
      delete: "Delete",
      addToSelection: "Add to selection",
      selectAllPhotos: "Select all",
      deleteTitle: "Delete photos",
      deleteConfirm1: "Are you sure you want to delete 1 photo?",
      deleteConfirmN: "photos. Are you sure you want to delete them?",
      deleteFolderTitle: "Delete folder",
      deleteFolderConfirm: "This folder and all files inside will be deleted. Continue?",
      folderDeleted: "Folder deleted",
      deleteWarning: "This action cannot be undone.",
      cancel: "Cancel",
      photos: "photo",
      items: "items",
      copied: "copied to clipboard",
      copiedFirst: "photos, first one copied to clipboard",
      copyFailed: "Copy to clipboard failed",
      copyImagesOnly: "Copy only works for images.",
      deleted: "photos deleted",
      deleteFailed: "Delete error",
      credTitle: "S3 Media Viewer",
      credDesc: "Enter your AWS credentials to access your S3 buckets.",
      saveLogin: "Save and Login",
      clearCreds: "Clear saved credentials",
      selectBucket: "Select bucket",
      selectBucketDesc: "Enter your bucket name.",
      changeBucket: "Change bucket",
      newFolder: "+ Folder",
      newFolderTitle: "New folder",
      upload: "↑ Upload",
      uploadTitle: "Upload",
      uploadModalDesc: "Select files or folder to upload to current location.",
      selectFiles: "Select files",
      selectFolder: "Select folder",
      folderNamePlaceholder: "Folder name",
      create: "Create",
      folderCreated: "Folder created",
      uploadSuccess: "uploaded",
      uploadFailed: "Upload failed",
      retry: "Retry",
      go: "Go",
      enterBucketName: "Bucket name",
      bucketPlaceholder: "bucket-name",
      fileProtocolHint: "If you opened the file directly (file://), this error occurs. Serve the app over HTTP: run 'npx serve' or 'python -m http.server 8000' in the project folder.",
    },
  };
  function t(key) { return (L[lang] || L.tr)[key] || key; }
  function setLang(l) {
    lang = l;
    localStorage.setItem("photos3_lang", lang);
    document.documentElement.lang = lang === "tr" ? "tr" : "en";
    applyTranslations();
  }
  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (key) el.placeholder = t(key);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (key) el.title = t(key);
    });
    var gs = document.getElementById("grid-size");
    if (gs) {
      gs.options[0].text = t("gridSmall");
      gs.options[1].text = t("gridMedium");
      gs.options[2].text = t("gridLarge");
    }
    var so = document.getElementById("sort-order");
    if (so) {
      so.options[0].text = t("sortAZ");
      so.options[1].text = t("sortZA");
    }
    document.querySelectorAll(".lang-toggle").forEach(function (el) {
      el.textContent = lang === "tr" ? "EN" : "TR";
      el.title = lang === "tr" ? "Switch to English" : "Türkçe'ye geç";
    });
    var optsBtn = document.getElementById("options-btn");
    if (optsBtn) optsBtn.innerHTML = "⚙ " + t("options");
    updateSelectionUI();
    updateFolderInfo();
  }

  var currentBucket = null;
  const STORAGE_KEYS = {
    ACCESS_KEY: "aws_access_key_id",
    SECRET_KEY: "aws_secret_access_key",
    REGION: "aws_region",
    LAST_BUCKET: "photos3_last_bucket",
  };

  const IMAGE_EXTENSIONS = new Set([
    ".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".svg",
  ]);
  const VIDEO_EXTENSIONS = new Set([
    ".mp4", ".webm", ".mov", ".avi", ".mkv", ".m4v", ".ogv",
  ]);
  const PDF_EXTENSIONS = new Set([".pdf"]);

  function getCredentials() {
    const accessKey = localStorage.getItem(STORAGE_KEYS.ACCESS_KEY);
    const secretKey = localStorage.getItem(STORAGE_KEYS.SECRET_KEY);
    const region = localStorage.getItem(STORAGE_KEYS.REGION);
    if (!accessKey || !secretKey || !region) return null;
    return { accessKeyId: accessKey, secretAccessKey: secretKey, region };
  }

  function saveCredentials(accessKey, secretKey, region) {
    localStorage.setItem(STORAGE_KEYS.ACCESS_KEY, accessKey);
    localStorage.setItem(STORAGE_KEYS.SECRET_KEY, secretKey);
    localStorage.setItem(STORAGE_KEYS.REGION, region);
  }

  function clearCredentials() {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_KEY);
    localStorage.removeItem(STORAGE_KEYS.SECRET_KEY);
    localStorage.removeItem(STORAGE_KEYS.REGION);
  }

  function configureAWS() {
    const creds = getCredentials();
    if (!creds) return false;
    AWS.config.update({
      accessKeyId: creds.accessKeyId,
      secretAccessKey: creds.secretAccessKey,
      region: creds.region,
    });
    return true;
  }

  function getExt(path) {
    const i = path.lastIndexOf(".");
    return i >= 0 ? path.slice(i).toLowerCase() : "";
  }

  var MIME_TYPES = {
    ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".gif": "image/gif",
    ".webp": "image/webp", ".bmp": "image/bmp", ".svg": "image/svg+xml",
    ".mp4": "video/mp4", ".webm": "video/webm", ".mov": "video/quicktime", ".avi": "video/x-msvideo",
    ".mkv": "video/x-matroska", ".m4v": "video/mp4", ".ogv": "video/ogg",
    ".pdf": "application/pdf",
  };
  function getMimeType(key) {
    return MIME_TYPES[getExt(key)] || "image/png";
  }

  function isImage(key) {
    return IMAGE_EXTENSIONS.has(getExt(key));
  }
  function isVideo(key) {
    return VIDEO_EXTENSIONS.has(getExt(key));
  }
  function isMedia(key) {
    return isImage(key) || isVideo(key);
  }
  function isPdf(key) {
    return PDF_EXTENSIONS.has(getExt(key));
  }

  function getFolderName(prefix) {
    const parts = prefix.replace(/\/$/, "").split("/");
    return parts[parts.length - 1] || ".";
  }

  function showScreen(screen) {
    document.getElementById("credentials-screen").classList.toggle("hidden", screen !== "credentials");
    document.getElementById("buckets-screen").classList.toggle("hidden", screen !== "buckets");
    document.getElementById("app-screen").classList.toggle("hidden", screen !== "app");
  }

  function setLoading(loading) {
    document.getElementById("loading").classList.toggle("hidden", !loading);
  }

  function showError(message) {
    const el = document.getElementById("error-message");
    if (el) {
      el.textContent = message;
      el.className = "error-message";
      el.classList.remove("hidden");
    }
  }

  function hideError() {
    const el = document.getElementById("error-message");
    if (el) el.classList.add("hidden");
  }

  function showToast(message, type) {
    type = type || "success";
    var el = document.getElementById("toast");
    if (!el) return;
    el.textContent = message;
    el.className = "toast " + type;
    el.classList.remove("hidden");
    clearTimeout(showToast._tid);
    showToast._tid = setTimeout(function () {
      el.classList.add("hidden");
    }, 2500);
  }

  function listObjects(prefix) {
    if (!currentBucket) return Promise.reject(new Error("No bucket selected"));
    return new Promise(function (resolve, reject) {
      const s3 = new AWS.S3();
      const folders = [];
      const files = [];

      function fetchPage(token) {
        const params = {
          Bucket: currentBucket,
          Prefix: prefix || "",
          Delimiter: "/",
        };
        if (token) params.ContinuationToken = token;

        s3.listObjectsV2(params, function (err, data) {
          if (err) {
            reject(err);
            return;
          }
          if (data.CommonPrefixes) {
            data.CommonPrefixes.forEach(function (p) {
              if (p.Prefix) folders.push(p.Prefix);
            });
          }
          if (data.Contents) {
            data.Contents.forEach(function (obj) {
              if (obj.Key && obj.Key !== prefix) {
                files.push(obj.Key);
              }
            });
          }
          if (data.IsTruncated && data.NextContinuationToken) {
            fetchPage(data.NextContinuationToken);
          } else {
            resolve({ folders: folders, files: files });
          }
        });
      }
      fetchPage();
    });
  }

  function listAllKeysUnderPrefix(prefix) {
    if (!currentBucket) return Promise.reject(new Error("No bucket selected"));
    return new Promise(function (resolve, reject) {
      const s3 = new AWS.S3();
      const keys = [];
      function fetchPage(token) {
        var params = { Bucket: currentBucket, Prefix: prefix };
        if (token) params.ContinuationToken = token;
        s3.listObjectsV2(params, function (err, data) {
          if (err) return reject(err);
          if (data.Contents) {
            data.Contents.forEach(function (obj) {
              if (obj.Key) keys.push(obj.Key);
            });
          }
          if (data.IsTruncated && data.NextContinuationToken) {
            fetchPage(data.NextContinuationToken);
          } else {
            resolve(keys);
          }
        });
      }
      fetchPage();
    });
  }

  function deleteFolder(prefix) {
    return listAllKeysUnderPrefix(prefix).then(function (keys) {
      if (keys.length === 0) return Promise.resolve();
      return Promise.all(keys.map(function (key) {
        return deleteObject(key);
      }));
    });
  }

  var listCache = {};
  var listCacheBucket = null;
  function invalidateListCache(prefix) {
    if (prefix) {
      delete listCache[prefix];
    } else {
      listCache = {};
      listCacheBucket = null;
    }
  }

  var objectUrlCache = {};
  function getObjectUrl(key) {
    if (objectUrlCache[key]) return Promise.resolve(objectUrlCache[key]);
    return new Promise(function (resolve, reject) {
      const s3 = new AWS.S3();
      s3.getObject({ Bucket: currentBucket, Key: key }, function (err, data) {
        if (err) {
          reject(err);
          return;
        }
        var contentType = data.ContentType || getMimeType(key) || "application/octet-stream";
        var blob;
        if (data.Body instanceof Blob) {
          blob = data.Body.type ? data.Body : new Blob([data.Body], { type: contentType });
        } else {
          blob = new Blob([data.Body], { type: contentType });
        }
        var url = URL.createObjectURL(blob);
        objectUrlCache[key] = url;
        resolve(url);
      });
    });
  }

  function getObjectBlob(key) {
    return new Promise(function (resolve, reject) {
      const s3 = new AWS.S3();
      s3.getObject({ Bucket: currentBucket, Key: key }, function (err, data) {
        if (err) {
          reject(err);
          return;
        }
        var blob;
        if (data.Body instanceof Blob) {
          blob = data.Body;
        } else {
          blob = new Blob([data.Body]);
        }
        resolve(blob);
      });
    });
  }

  function deleteObject(key) {
    return new Promise(function (resolve, reject) {
      const s3 = new AWS.S3();
      s3.deleteObject({ Bucket: currentBucket, Key: key }, function (err) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  function putObject(key, body, contentType) {
    return new Promise(function (resolve, reject) {
      const s3 = new AWS.S3();
      var params = { Bucket: currentBucket, Key: key, Body: body };
      if (contentType) params.ContentType = contentType;
      s3.putObject(params, function (err) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  function sortFiles(files) {
    var arr = files.slice();
    arr.sort(function (a, b) {
      var na = a.split("/").pop().toLowerCase();
      var nb = b.split("/").pop().toLowerCase();
      return sortOrder === "za" ? nb.localeCompare(na) : na.localeCompare(nb);
    });
    return arr;
  }

  function renderBreadcrumb(prefix) {
    const parts = prefix ? prefix.replace(/\/$/, "").split("/").filter(Boolean) : [];
    const el = document.getElementById("breadcrumb");
    el.innerHTML = "";

    const root = document.createElement("a");
    root.href = "#";
    root.textContent = t("home");
    root.dataset.prefix = "";
    el.appendChild(root);

    for (var i = 0; i < parts.length; i++) {
      const sep = document.createElement("span");
      sep.className = "separator";
      sep.textContent = " / ";
      el.appendChild(sep);

      const p = parts.slice(0, i + 1).join("/") + "/";
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = parts[i];
      link.dataset.prefix = p;
      el.appendChild(link);
    }
  }

  var lazyObserver = null;
  var currentPath = "";
  var currentFiles = [];
  var currentFolders = [];
  var gridSize = localStorage.getItem("photos3_gridSize") || "medium";
  var sortOrder = localStorage.getItem("photos3_sortOrder") || "az";
  var selectedKeys = new Set();
  var lastClickedPhotoIndex = -1;
  var clickTimeout = null;
  var dragStart = null;
  var justDragged = false;

  function updateFolderInfo() {
    var infoEl = document.getElementById("folder-info");
    if (infoEl) infoEl.textContent = currentFiles.length + " " + t("items");
  }

  function updateSelectionUI() {
    var bar = document.getElementById("selection-bar");
    var countEl = document.getElementById("selection-count");
    var n = selectedKeys.size;
    countEl.textContent = n + " " + t("selected");
    bar.classList.toggle("hidden", n === 0);
    document.body.classList.toggle("selection-bar-visible", n > 0);
    document.querySelectorAll(".photo-item[data-key]").forEach(function (el) {
      el.classList.toggle("selected", selectedKeys.has(el.dataset.key));
      var cb = el.querySelector(".photo-checkbox");
      if (cb) cb.checked = selectedKeys.has(el.dataset.key);
    });
  }

  function getPhotoItems() {
    return getPhotoItemsCached();
  }

  function getPhotoIndex(el) {
    return getPhotoItems().indexOf(el);
  }

  function selectRange(fromIdx, toIdx) {
    var items = getPhotoItems();
    var lo = Math.min(fromIdx, toIdx);
    var hi = Math.max(fromIdx, toIdx);
    for (var i = lo; i <= hi; i++) {
      if (items[i] && items[i].dataset.key) selectedKeys.add(items[i].dataset.key);
    }
    updateSelectionUI();
    flashRectForRange(items, lo, hi);
  }

  function flashRectForRange(items, lo, hi) {
    if (lo > hi || !items[lo] || !items[hi]) return;
    var r1 = items[lo].getBoundingClientRect();
    var r2 = items[hi].getBoundingClientRect();
    var x = Math.min(r1.left, r2.left);
    var y = Math.min(r1.top, r2.top);
    var w = Math.max(r1.right, r2.right) - x;
    var h = Math.max(r1.bottom, r2.bottom) - y;
    var rectEl = document.getElementById("selection-rect");
    rectEl.style.left = x + "px";
    rectEl.style.top = y + "px";
    rectEl.style.width = w + "px";
    rectEl.style.height = h + "px";
    rectEl.classList.remove("hidden");
    setTimeout(function () { rectEl.classList.add("hidden"); }, 300);
  }

  var SELECTION_RECT_PADDING = 2;
  var photoItemsCache = null;
  function invalidatePhotoItemsCache() {
    photoItemsCache = null;
  }
  function getPhotoItemsCached() {
    if (!photoItemsCache) photoItemsCache = Array.from(document.querySelectorAll(".photo-item[data-key]"));
    return photoItemsCache;
  }
  function photosInRect(x1, y1, x2, y2) {
    var loX = Math.min(x1, x2) - SELECTION_RECT_PADDING;
    var hiX = Math.max(x1, x2) + SELECTION_RECT_PADDING;
    var loY = Math.min(y1, y2) - SELECTION_RECT_PADDING;
    var hiY = Math.max(y1, y2) + SELECTION_RECT_PADDING;
    var keys = [];
    getPhotoItemsCached().forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.right >= loX && r.left <= hiX && r.bottom >= loY && r.top <= hiY && el.dataset.key) {
        keys.push(el.dataset.key);
      }
    });
    return keys;
  }

  function setupLazyObserver() {
    if (lazyObserver) lazyObserver.disconnect();
    lazyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var wrap = entry.target;
        var key = wrap.dataset.key;
        if (!key || wrap.dataset.loaded || wrap.dataset.loading) return;
        wrap.dataset.loading = "1";
        lazyObserver.unobserve(wrap);
        getObjectUrl(key).then(function (url) {
          var img = wrap.querySelector("img");
          var video = wrap.querySelector("video");
          if (img) {
            img.onload = function () {
              wrap.dataset.loaded = "1";
              delete wrap.dataset.loading;
            };
            img.src = url;
          } else if (video) {
            video.onloadeddata = function () {
              wrap.dataset.loaded = "1";
              delete wrap.dataset.loading;
            };
            video.src = url;
          }
        }).catch(function () { delete wrap.dataset.loading; });
      });
    }, { rootMargin: "100px", threshold: 0.01 });

    var items = document.querySelectorAll(".photo-item[data-key]:not([data-loaded]):not([data-loading])");
    items.forEach(function (el) { lazyObserver.observe(el); });
  }

  function renderContent(prefix, folders, files) {
    invalidatePhotoItemsCache();
    currentFolders = folders || [];
    currentFiles = files || [];
    var sortedFiles = sortFiles(currentFiles);
    var foldersEl = document.getElementById("folders");
    var photosEl = document.getElementById("photos");

    foldersEl.innerHTML = "";
    photosEl.innerHTML = "";

    updateFolderInfo();

    photosEl.className = "photos grid-" + gridSize;

    folders.forEach(function (folderPrefix) {
      const div = document.createElement("div");
      div.className = "folder-item";
      div.dataset.prefix = folderPrefix;
      const link = document.createElement("a");
      link.href = "#";
      link.className = "folder-item-link";
      const name = document.createElement("span");
      name.textContent = getFolderName(folderPrefix);
      link.appendChild(name);
      div.appendChild(link);
      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "folder-delete-btn";
      delBtn.title = lang === "tr" ? "Klasörü sil" : "Delete folder";
      delBtn.textContent = "×";
      delBtn.setAttribute("aria-label", "Delete folder");
      div.appendChild(delBtn);
      foldersEl.appendChild(div);
    });

    sortedFiles.forEach(function (key) {
      const div = document.createElement("div");
      div.className = "photo-item select-mode";
      div.dataset.key = key;
      div.dataset.mediaType = isImage(key) ? "image" : isVideo(key) ? "video" : "file";
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.className = "photo-checkbox";
      cb.checked = selectedKeys.has(key);
      div.appendChild(cb);
      if (isImage(key)) {
        const img = document.createElement("img");
        img.alt = key.split("/").pop();
        img.dataset.key = key;
        div.appendChild(img);
      } else if (isVideo(key)) {
        const wrap = document.createElement("div");
        wrap.className = "video-thumb-wrap";
        const video = document.createElement("video");
        video.muted = true;
        video.playsInline = true;
        video.preload = "metadata";
        video.dataset.key = key;
        wrap.appendChild(video);
        const playIcon = document.createElement("span");
        playIcon.className = "video-play-icon";
        playIcon.textContent = "▶";
        wrap.appendChild(playIcon);
        div.appendChild(wrap);
      } else {
        div.dataset.loaded = "1";
        const fileIcon = document.createElement("div");
        fileIcon.className = "file-icon";
        fileIcon.textContent = "📄";
        const fileName = document.createElement("span");
        fileName.className = "file-name";
        fileName.textContent = key.split("/").pop();
        div.appendChild(fileIcon);
        div.appendChild(fileName);
      }
      photosEl.appendChild(div);
    });

    updateSelectionUI();
    setupLazyObserver();
  }

  var loadPathId = 0;
  function loadPath(prefix) {
    prefix = prefix || "";
    currentPath = prefix;
    loadPathId += 1;
    var thisLoadId = loadPathId;
    Object.keys(objectUrlCache).forEach(function (k) {
      URL.revokeObjectURL(objectUrlCache[k]);
    });
    objectUrlCache = {};
    var foldersEl = document.getElementById("folders");
    var photosEl = document.getElementById("photos");
    if (foldersEl) foldersEl.innerHTML = "";
    if (photosEl) photosEl.innerHTML = "";
    hideError();
    if (!configureAWS()) {
      showScreen("credentials");
      return;
    }
    var cached = listCacheBucket === currentBucket && listCache[prefix];
    if (cached) {
      renderBreadcrumb(prefix);
      renderContent(prefix, cached.folders, cached.files);
      setLoading(false);
    } else {
      setLoading(true);
    }
    listObjects(prefix)
      .then(function (result) {
        if (thisLoadId !== loadPathId) return;
        listCacheBucket = currentBucket;
        listCache[prefix] = { folders: result.folders, files: result.files };
        renderBreadcrumb(prefix);
        renderContent(prefix, result.folders, result.files);
      })
      .catch(function (err) {
        if (thisLoadId !== loadPathId) return;
        showError(
          "Hata: " + (err.message || String(err)) +
          " — Bucket CORS ayarlı mı? IAM izinleri s3:ListBucket ve s3:GetObject içeriyor mu?"
        );
      })
      .finally(function () {
        if (thisLoadId !== loadPathId) return;
        setLoading(false);
      });
  }

  var lightboxUrl = null;
  var lightboxKey = null;
  var lightboxFiles = [];
  var lightboxIndex = 0;

  function showPhotoAtIndex(index) {
    if (index < 0 || index >= lightboxFiles.length) return;
    lightboxIndex = index;
    var key = lightboxFiles[index];
    openLightbox(key, false);
  }

  function goPrev() {
    if (lightboxIndex > 0) showPhotoAtIndex(lightboxIndex - 1);
  }

  function goNext() {
    if (lightboxIndex < lightboxFiles.length - 1) showPhotoAtIndex(lightboxIndex + 1);
  }

  function openLightbox(key, updateList) {
    if (updateList !== false) {
      var items = document.querySelectorAll(".photo-item[data-key]");
      lightboxFiles = [];
      items.forEach(function (el) {
        var k = el.dataset.key;
        if (k && (isMedia(k) || isPdf(k))) lightboxFiles.push(k);
      });
      lightboxIndex = lightboxFiles.indexOf(key);
      if (lightboxIndex < 0) lightboxIndex = 0;
    }
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    const video = document.getElementById("lightbox-video");
    const iframe = document.getElementById("lightbox-iframe");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");
    if (lightboxUrl && (!lightboxKey || objectUrlCache[lightboxKey] !== lightboxUrl)) {
      URL.revokeObjectURL(lightboxUrl);
    }
    lightboxUrl = null;
    lightboxKey = key;
    video.pause();
    video.src = "";
    img.src = "";
    iframe.src = "";
    img.classList.add("hidden");
    video.classList.add("hidden");
    iframe.classList.add("hidden");
    prevBtn.style.visibility = lightboxFiles.length > 1 ? "visible" : "hidden";
    nextBtn.style.visibility = lightboxFiles.length > 1 ? "visible" : "hidden";
    setLoading(true);
    getObjectUrl(key).then(function (url) {
      setLoading(false);
      lightboxUrl = url;
      if (isVideo(key)) {
        video.src = url;
        video.classList.remove("hidden");
        video.play();
      } else if (isPdf(key)) {
        window.open(url, "_blank");
        lightbox.classList.add("hidden");
      } else {
        img.src = url;
        img.classList.remove("hidden");
      }
      lightbox.classList.remove("hidden");
    }).catch(function () {
      setLoading(false);
    });
  }

  function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
    const img = document.getElementById("lightbox-img");
    const video = document.getElementById("lightbox-video");
    const iframe = document.getElementById("lightbox-iframe");
    video.pause();
    video.src = "";
    img.src = "";
    iframe.src = "";
    if (lightboxUrl && objectUrlCache[lightboxKey] !== lightboxUrl) {
      URL.revokeObjectURL(lightboxUrl);
    }
    lightboxUrl = null;
    lightboxKey = null;
  }

  function downloadLightboxImage() {
    if (!lightboxUrl || !lightboxKey) return;
    const a = document.createElement("a");
    a.href = lightboxUrl;
    a.download = lightboxKey.split("/").pop();
    a.click();
  }

  function downloadSelected() {
    var keys = Array.from(selectedKeys);
    if (keys.length === 0) return;
    if (keys.length === 1) {
      getObjectUrl(keys[0]).then(function (url) {
        var a = document.createElement("a");
        a.href = url;
        a.download = keys[0].split("/").pop();
        a.click();
        URL.revokeObjectURL(url);
      });
      return;
    }
    if (typeof JSZip === "undefined") {
      keys.forEach(function (key, i) {
        setTimeout(function () {
          getObjectUrl(key).then(function (url) {
            var a = document.createElement("a");
            a.href = url;
            a.download = key.split("/").pop();
            a.click();
            URL.revokeObjectURL(url);
          });
        }, i * 300);
      });
      return;
    }
    var zip = new JSZip();
    var pending = keys.length;
    keys.forEach(function (key) {
      getObjectBlob(key).then(function (blob) {
        var name = key.replace(/\//g, "_");
        zip.file(name, blob);
        pending--;
        if (pending === 0) {
          zip.generateAsync({ type: "blob" }).then(function (blob) {
            var a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "photos.zip";
            a.click();
            URL.revokeObjectURL(a.href);
          });
        }
      }).catch(function () { pending--; });
    });
  }

  function blobToPngBlob(blob) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      var url = URL.createObjectURL(blob);
      img.onload = function () {
        URL.revokeObjectURL(url);
        var canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(function (pngBlob) {
          if (pngBlob) resolve(pngBlob);
          else reject(new Error("Canvas toBlob failed"));
        }, "image/png");
      };
      img.onerror = function () {
        URL.revokeObjectURL(url);
        reject(new Error("Image load failed"));
      };
      img.src = url;
    });
  }

  function getBlobForCopy(key) {
    var wrap = Array.from(document.querySelectorAll(".photo-item[data-key]")).find(function (el) { return el.dataset.key === key; });
    var img = wrap ? wrap.querySelector("img") : null;
    if (img && img.src && img.src.startsWith("blob:") && img.complete && img.naturalWidth > 0) {
      return blobToPngBlobFromImg(img);
    }
    return getObjectBlob(key).then(blobToPngBlob);
  }

  function blobToPngBlobFromImg(img) {
    return new Promise(function (resolve, reject) {
      var canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(function (pngBlob) {
        if (pngBlob) resolve(pngBlob);
        else reject(new Error("Canvas toBlob failed"));
      }, "image/png");
    });
  }

  function copySelected() {
    var keys = Array.from(selectedKeys).filter(isImage);
    if (keys.length === 0) {
      showToast(t("copyImagesOnly"), "error");
      return;
    }
    if (!navigator.clipboard || !navigator.clipboard.write) {
      showError("Panoya kopyalama desteklenmiyor. HTTPS veya localhost kullanın.");
      return;
    }
    var sel = document.getSelection();
    if (sel) sel.removeAllRanges();
    var copyOne = function (key) {
      return getBlobForCopy(key).then(function (pngBlob) {
        return navigator.clipboard.write([new ClipboardItem({ "image/png": pngBlob })]);
      });
    };
    if (keys.length === 1) {
      copyOne(keys[0]).then(function () {
        showToast("1 " + t("photos") + " " + t("copied"));
      }).catch(function (err) {
        showToast(t("copyFailed") + ": " + (err.message || err), "error");
      });
    } else {
      copyOne(keys[0]).then(function () {
        showToast(keys.length + " " + t("copiedFirst"));
      }).catch(function (err) {
        showToast(t("copyFailed") + ": " + (err.message || err), "error");
      });
    }
  }

  function showDeleteFolderModal(prefix) {
    var modal = document.getElementById("delete-modal");
    var titleEl = document.getElementById("delete-modal-title");
    var msg = document.getElementById("delete-modal-message");
    var cancelBtn = document.getElementById("delete-modal-cancel");
    var confirmBtn = document.getElementById("delete-modal-confirm");
    titleEl.textContent = t("deleteFolderTitle");
    msg.textContent = t("deleteFolderConfirm");
    modal.classList.remove("hidden");
    function close() {
      modal.classList.add("hidden");
      cancelBtn.removeEventListener("click", onCancel);
      confirmBtn.removeEventListener("click", onConfirmClick);
      modal.removeEventListener("click", onBackdropClick);
      document.removeEventListener("keydown", onEscape);
    }
    function onCancel() { close(); }
    function onConfirmClick() {
      close();
      setLoading(true);
      deleteFolder(prefix).then(function () {
        invalidateListCache(prefix);
        invalidateListCache(currentPath);
        setLoading(false);
        showToast(t("folderDeleted"));
        loadPath(currentPath);
      }).catch(function (err) {
        setLoading(false);
        showToast(t("deleteFailed") + ": " + (err.message || String(err)), "error");
      });
    }
    function onBackdropClick(e) {
      if (e.target === modal) close();
    }
    function onEscape(e) {
      if (e.key === "Escape") close();
    }
    cancelBtn.addEventListener("click", onCancel);
    confirmBtn.addEventListener("click", onConfirmClick);
    modal.addEventListener("click", onBackdropClick);
    document.addEventListener("keydown", onEscape);
  }

  function showDeleteModal(keys, onConfirm) {
    var modal = document.getElementById("delete-modal");
    var titleEl = document.getElementById("delete-modal-title");
    var msg = document.getElementById("delete-modal-message");
    titleEl.textContent = t("deleteTitle");
    var n = keys.length;
    msg.textContent = n === 1 ? t("deleteConfirm1") : n + " " + t("deleteConfirmN");
    modal.classList.remove("hidden");
    var cancelBtn = document.getElementById("delete-modal-cancel");
    var confirmBtn = document.getElementById("delete-modal-confirm");
    function close() {
      modal.classList.add("hidden");
      cancelBtn.removeEventListener("click", onCancel);
      confirmBtn.removeEventListener("click", onConfirmClick);
      modal.removeEventListener("click", onBackdropClick);
      document.removeEventListener("keydown", onEscape);
    }
    function onCancel() { close(); }
    function onConfirmClick() {
      close();
      onConfirm();
    }
    function onBackdropClick(e) {
      if (e.target === modal) close();
    }
    function onEscape(e) {
      if (e.key === "Escape") close();
    }
    cancelBtn.addEventListener("click", onCancel);
    confirmBtn.addEventListener("click", onConfirmClick);
    modal.addEventListener("click", onBackdropClick);
    document.addEventListener("keydown", onEscape);
  }

  function deleteSelected() {
    var keys = Array.from(selectedKeys);
    if (keys.length === 0) return;
    showDeleteModal(keys, function () {
      var done = 0;
      keys.forEach(function (key) {
        deleteObject(key).then(function () {
          selectedKeys.delete(key);
          currentFiles = currentFiles.filter(function (k) { return k !== key; });
          invalidateListCache(currentPath);
          document.querySelectorAll(".photo-item").forEach(function (el) {
            if (el.dataset.key === key) el.remove();
          });
          invalidatePhotoItemsCache();
          done++;
          if (done === keys.length) {
            updateSelectionUI();
            updateFolderInfo();
            showToast(keys.length + " " + t("deleted"));
          }
        }).catch(function (err) {
          showToast(t("deleteFailed") + ": " + (err.message || err), "error");
          done++;
        });
      });
      selectedKeys.clear();
      updateSelectionUI();
    });
  }

  function selectAllInFolder() {
    getPhotoItemsCached().forEach(function (el) {
      if (el.dataset.key) selectedKeys.add(el.dataset.key);
    });
    updateSelectionUI();
  }

  function onKeydown(e) {
    var active = document.activeElement;
    var inInput = active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable);
    var lightboxOpen = !document.getElementById("lightbox").classList.contains("hidden");

    if (lightboxOpen) {
      if (e.key === "Escape") { closeLightbox(); return; }
      if (e.key === " ") {
        e.preventDefault();
        if (lightboxKey) {
          if (selectedKeys.has(lightboxKey)) selectedKeys.delete(lightboxKey);
          else selectedKeys.add(lightboxKey);
          updateSelectionUI();
        }
        return;
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); goPrev(); return; }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); goNext(); return; }
      return;
    }

    if (e.key === "Escape") {
      var optsPanel = document.getElementById("options-panel");
      if (optsPanel && !optsPanel.classList.contains("hidden")) {
        optsPanel.classList.add("hidden");
        var optsBtn = document.getElementById("options-btn");
        if (optsBtn) optsBtn.setAttribute("aria-expanded", "false");
        return;
      }
      if (selectedKeys.size > 0) {
        e.preventDefault();
        selectedKeys.clear();
        updateSelectionUI();
      }
      return;
    }
    if (e.key === "a" && (e.metaKey || e.ctrlKey)) {
      if (!inInput) {
        e.preventDefault();
        selectAllInFolder();
      }
      return;
    }
    if (e.key === "c" && (e.metaKey || e.ctrlKey)) {
      if (!inInput && selectedKeys.size > 0) {
        e.preventDefault();
        copySelected();
      }
      return;
    }
    if (e.key === "d" && (e.metaKey || e.ctrlKey)) {
      if (!inInput && selectedKeys.size > 0) {
        e.preventDefault();
        downloadSelected();
      }
      return;
    }
    if ((e.key === "Delete" || e.key === "Backspace") && !inInput && selectedKeys.size > 0) {
      e.preventDefault();
      deleteSelected();
      return;
    }
  }

  function init() {
    document.documentElement.lang = lang === "tr" ? "tr" : "en";
    applyTranslations();

    document.querySelectorAll("#lang-toggle, #lang-toggle-app, #lang-toggle-buckets").forEach(function (el) {
      if (el) el.addEventListener("click", function () {
        setLang(lang === "tr" ? "en" : "tr");
      });
    });

    const creds = getCredentials();
    if (!creds) {
      showScreen("credentials");
    } else {
      var lastBucket = localStorage.getItem(STORAGE_KEYS.LAST_BUCKET);
      if (lastBucket && configureAWS()) {
        selectBucket(lastBucket);
      } else {
        showBucketsScreen();
      }
    }

    document.getElementById("credentials-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const accessKey = document.getElementById("access-key").value.trim();
      const secretKey = document.getElementById("secret-key").value.trim();
      const region = document.getElementById("region").value.trim();
      saveCredentials(accessKey, secretKey, region);
      showBucketsScreen();
    });

    document.getElementById("clear-credentials").addEventListener("click", function () {
      clearCredentials();
      document.getElementById("access-key").value = "";
      document.getElementById("secret-key").value = "";
      document.getElementById("region").value = "eu-west-1";
    });

    document.getElementById("logout-btn").addEventListener("click", function () {
      showScreen("credentials");
    });

    var bucketsLogout = document.getElementById("buckets-logout");
    if (bucketsLogout) bucketsLogout.addEventListener("click", function () {
      showScreen("credentials");
    });

    document.getElementById("change-bucket").addEventListener("click", function (e) {
      e.preventDefault();
      showBucketsScreen();
    });

    function showBucketsScreen() {
      showScreen("buckets");
      var manualInput = document.getElementById("bucket-manual-input");
      if (manualInput) manualInput.value = localStorage.getItem(STORAGE_KEYS.LAST_BUCKET) || "";
      if (!configureAWS()) {
        showScreen("credentials");
        return;
      }
    }

    document.getElementById("bucket-manual-go").addEventListener("click", function () {
      var name = (document.getElementById("bucket-manual-input").value || "").trim();
      if (!name) return;
      selectBucket(name);
    });
    document.getElementById("bucket-manual-input").addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("bucket-manual-go").click();
      }
    });

    function selectBucket(name) {
      currentBucket = name;
      localStorage.setItem(STORAGE_KEYS.LAST_BUCKET, name);
      var nameEl = document.getElementById("current-bucket-name");
      if (nameEl) nameEl.textContent = name;
      showScreen("app");
      selectedKeys.clear();
      loadPath("");
    }



    var gridSizeEl = document.getElementById("grid-size");
    var sortOrderEl = document.getElementById("sort-order");
    if (gridSizeEl) {
      gridSizeEl.value = gridSize;
      gridSizeEl.addEventListener("change", function () {
        gridSize = gridSizeEl.value;
        localStorage.setItem("photos3_gridSize", gridSize);
        document.getElementById("photos").className = "photos grid-" + gridSize;
      });
    }
    if (sortOrderEl) {
      sortOrderEl.value = sortOrder;
      sortOrderEl.addEventListener("change", function () {
        sortOrder = sortOrderEl.value;
        localStorage.setItem("photos3_sortOrder", sortOrder);
        renderContent(currentPath, currentFolders, currentFiles);
      });
    }

    var optionsPanel = document.getElementById("options-panel");
    var optionsBtn = document.getElementById("options-btn");
    if (optionsBtn && optionsPanel) {
      optionsBtn.addEventListener("click", function () {
        optionsPanel.classList.remove("hidden");
        optionsBtn.setAttribute("aria-expanded", "true");
        optionsPanel.querySelectorAll(".options-choice[data-grid]").forEach(function (btn) {
          btn.classList.toggle("active", btn.dataset.grid === gridSize);
          btn.textContent = t(btn.dataset.grid === "small" ? "gridSmall" : btn.dataset.grid === "medium" ? "gridMedium" : "gridLarge");
        });
        optionsPanel.querySelectorAll(".options-choice[data-sort]").forEach(function (btn) {
          btn.classList.toggle("active", btn.dataset.sort === sortOrder);
          btn.textContent = t(btn.dataset.sort === "az" ? "sortAZ" : "sortZA");
        });
        var gl = document.getElementById("options-grid-label");
        var sl = document.getElementById("options-sort-label");
        if (gl) gl.textContent = t("gridSize");
        if (sl) sl.textContent = t("sort");
      });
      optionsPanel.addEventListener("click", function (e) {
        if (e.target === optionsPanel) {
          optionsPanel.classList.add("hidden");
          optionsBtn.setAttribute("aria-expanded", "false");
        }
      });
      optionsPanel.querySelectorAll(".options-choice[data-grid]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          gridSize = btn.dataset.grid;
          localStorage.setItem("photos3_gridSize", gridSize);
          document.getElementById("photos").className = "photos grid-" + gridSize;
          var gs = document.getElementById("grid-size");
          if (gs) gs.value = gridSize;
          optionsPanel.classList.add("hidden");
          optionsBtn.setAttribute("aria-expanded", "false");
        });
      });
      optionsPanel.querySelectorAll(".options-choice[data-sort]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          sortOrder = btn.dataset.sort;
          localStorage.setItem("photos3_sortOrder", sortOrder);
          renderContent(currentPath, currentFolders, currentFiles);
          var so = document.getElementById("sort-order");
          if (so) so.value = sortOrder;
          optionsPanel.classList.add("hidden");
          optionsBtn.setAttribute("aria-expanded", "false");
        });
      });
    }

    document.getElementById("header-select-all").addEventListener("click", selectAllInFolder);
    document.getElementById("selection-select-all").addEventListener("click", selectAllInFolder);
    document.getElementById("selection-download").addEventListener("click", downloadSelected);
    document.getElementById("selection-copy").addEventListener("click", copySelected);
    document.getElementById("selection-delete").addEventListener("click", deleteSelected);
    document.getElementById("selection-clear").addEventListener("click", function () {
      selectedKeys.clear();
      updateSelectionUI();
    });

    var newFolderModal = document.getElementById("new-folder-modal");
    var newFolderNameInput = document.getElementById("new-folder-name");
    document.getElementById("btn-new-folder").addEventListener("click", function () {
      newFolderNameInput.value = "";
      newFolderModal.classList.remove("hidden");
      newFolderNameInput.focus();
    });
    document.getElementById("new-folder-cancel").addEventListener("click", function () {
      newFolderModal.classList.add("hidden");
    });
    document.getElementById("new-folder-confirm").addEventListener("click", function () {
      var name = (newFolderNameInput.value || "").trim().replace(/[/\\]+/g, "");
      if (!name) return;
      var key = currentPath + name + "/";
      newFolderModal.classList.add("hidden");
      putObject(key, new Blob([]))
        .then(function () {
          showToast(t("folderCreated"));
          invalidateListCache(currentPath);
          loadPath(currentPath);
        })
        .catch(function (err) {
          showToast((err.message || String(err)) + " — s3:PutObject izni ve CORS PUT var mı?", "error");
        });
    });
    newFolderNameInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") document.getElementById("new-folder-confirm").click();
      if (e.key === "Escape") newFolderModal.classList.add("hidden");
    });
    newFolderModal.addEventListener("click", function (e) {
      if (e.target === newFolderModal) newFolderModal.classList.add("hidden");
    });

    var uploadModal = document.getElementById("upload-modal");
    document.getElementById("btn-upload").addEventListener("click", function () {
      uploadModal.classList.remove("hidden");
    });
    document.getElementById("upload-modal-cancel").addEventListener("click", function () {
      uploadModal.classList.add("hidden");
    });
    document.getElementById("upload-modal-files").addEventListener("click", function () {
      uploadModal.classList.add("hidden");
      document.getElementById("upload-input").click();
    });
    document.getElementById("upload-modal-folder").addEventListener("click", function () {
      uploadModal.classList.add("hidden");
      document.getElementById("upload-folder-input").click();
    });
    uploadModal.addEventListener("click", function (e) {
      if (e.target === uploadModal) uploadModal.classList.add("hidden");
    });
    document.addEventListener("keydown", function uploadModalEscape(e) {
      if (e.key === "Escape" && !uploadModal.classList.contains("hidden")) {
        uploadModal.classList.add("hidden");
      }
    });

    document.getElementById("upload-input").addEventListener("change", function (e) {
      var files = e.target.files;
      if (!files || files.length === 0) return;
      var prefix = currentPath;
      var done = 0;
      var total = files.length;
      function uploadNext(i) {
        if (i >= total) {
          e.target.value = "";
          showToast(total + " " + t("uploadSuccess"));
          invalidateListCache(currentPath);
          loadPath(currentPath);
          return;
        }
        var file = files[i];
        var key = prefix + file.name;
        putObject(key, file, file.type || "application/octet-stream")
          .then(function () {
            done++;
            uploadNext(i + 1);
          })
          .catch(function (err) {
            showToast(t("uploadFailed") + ": " + (err.message || String(err)), "error");
            e.target.value = "";
          });
      }
      uploadNext(0);
    });

    document.getElementById("upload-folder-input").addEventListener("change", function (e) {
      var files = e.target.files;
      if (!files || files.length === 0) return;
      var prefix = currentPath;
      var fileList = Array.from(files);
      function uploadNext(i) {
        if (i >= fileList.length) {
          e.target.value = "";
          showToast(fileList.length + " " + t("uploadSuccess"));
          invalidateListCache(currentPath);
          loadPath(currentPath);
          return;
        }
        var file = fileList[i];
        var relPath = (file.webkitRelativePath || file.name || "").replace(/\\/g, "/");
        var key = prefix + relPath;
        if (!key) { uploadNext(i + 1); return; }
        putObject(key, file, file.type || "application/octet-stream")
          .then(function () {
            uploadNext(i + 1);
          })
          .catch(function (err) {
            showToast(t("uploadFailed") + ": " + (err.message || String(err)), "error");
            e.target.value = "";
          });
      }
      uploadNext(0);
    });

    document.getElementById("breadcrumb").addEventListener("click", function (e) {
      const a = e.target.closest("a");
      if (a && a.dataset.prefix !== undefined) {
        e.preventDefault();
        loadPath(a.dataset.prefix);
      }
    });

    var contentEl = document.getElementById("content");
    contentEl.addEventListener("click", function (e) {
      contentEl.focus();
      const folderDelBtn = e.target.closest(".folder-delete-btn");
      if (folderDelBtn) {
        e.preventDefault();
        e.stopPropagation();
        var folderEl = folderDelBtn.closest(".folder-item");
        if (folderEl && folderEl.dataset.prefix) {
          showDeleteFolderModal(folderEl.dataset.prefix);
        }
        return;
      }
      const folder = e.target.closest(".folder-item-link");
      if (folder) {
        e.preventDefault();
        var folderEl = folder.closest(".folder-item");
        if (folderEl && folderEl.dataset.prefix) loadPath(folderEl.dataset.prefix);
      }
      const photo = e.target.closest(".photo-item");
      if (photo) {
        const key = photo.dataset.key;
        if (!key) return;
        if (justDragged) return;
        if (e.target.classList.contains("photo-checkbox")) {
          if (selectedKeys.has(key)) selectedKeys.delete(key);
          else selectedKeys.add(key);
          updateSelectionUI();
        } else if (e.ctrlKey || e.metaKey) {
          if (selectedKeys.has(key)) selectedKeys.delete(key);
          else selectedKeys.add(key);
          lastClickedPhotoIndex = getPhotoIndex(photo);
          updateSelectionUI();
        } else if (e.shiftKey) {
          var idx = getPhotoIndex(photo);
          if (lastClickedPhotoIndex >= 0) selectRange(lastClickedPhotoIndex, idx);
          else {
            selectedKeys.add(key);
            lastClickedPhotoIndex = idx;
          }
          updateSelectionUI();
        } else if (e.detail === 2) {
          if (clickTimeout) clearTimeout(clickTimeout);
          clickTimeout = null;
          lastClickedPhotoIndex = getPhotoIndex(photo);
          if (isMedia(key) || isPdf(key)) {
            openLightbox(key, true);
          } else {
            getObjectUrl(key).then(function (url) {
              window.open(url, "_blank");
            });
          }
        } else {
          if (clickTimeout) clearTimeout(clickTimeout);
          lastClickedPhotoIndex = getPhotoIndex(photo);
          clickTimeout = setTimeout(function () {
            clickTimeout = null;
            if (selectedKeys.has(key)) selectedKeys.delete(key);
            else selectedKeys.add(key);
            updateSelectionUI();
          }, 250);
        }
      }
    });

    var rectEl = document.getElementById("selection-rect");
    var dragRafId = null;
    var lastMove = { x: 0, y: 0 };
    contentEl.addEventListener("mousedown", function (e) {
      if (e.button !== 0) return;
      if (e.target.closest(".folder-item") || e.target.closest(".folder-item-link")) return;
      if (!e.target.closest("#content")) return;
      if (e.ctrlKey || e.metaKey || e.shiftKey) return;
      dragStart = { x: e.clientX, y: e.clientY };
      lastMove.x = e.clientX;
      lastMove.y = e.clientY;
      rectEl.style.left = e.clientX + "px";
      rectEl.style.top = e.clientY + "px";
      rectEl.style.width = "0";
      rectEl.style.height = "0";
      rectEl.classList.remove("hidden");
    }, true);
    document.addEventListener("mousemove", function (e) {
      if (!dragStart) return;
      lastMove.x = e.clientX;
      lastMove.y = e.clientY;
      if (dragRafId) return;
      dragRafId = requestAnimationFrame(function () {
        dragRafId = null;
        if (!dragStart) return;
        var x = Math.min(dragStart.x, lastMove.x);
        var y = Math.min(dragStart.y, lastMove.y);
        var w = Math.max(Math.abs(lastMove.x - dragStart.x), 1);
        var h = Math.max(Math.abs(lastMove.y - dragStart.y), 1);
        rectEl.style.left = x + "px";
        rectEl.style.top = y + "px";
        rectEl.style.width = w + "px";
        rectEl.style.height = h + "px";
      });
    }, { passive: true });
    document.addEventListener("mouseup", function (e) {
      if (!dragStart) return;
      if (e.button !== 0) return;
      var moved = Math.abs(e.clientX - dragStart.x) > 3 || Math.abs(e.clientY - dragStart.y) > 3;
      var keys = photosInRect(dragStart.x, dragStart.y, e.clientX, e.clientY);
      if (moved && keys.length > 0) {
        justDragged = true;
        setTimeout(function () { justDragged = false; }, 0);
        keys.forEach(function (k) {
          if (selectedKeys.has(k)) selectedKeys.delete(k);
          else selectedKeys.add(k);
        });
      }
      updateSelectionUI();
      rectEl.classList.add("hidden");
      dragStart = null;
    });

    document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
    document.getElementById("lightbox-select").addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (lightboxKey) {
        selectedKeys.add(lightboxKey);
        updateSelectionUI();
      }
    });
    document.getElementById("lightbox-select-all").addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      lightboxFiles.forEach(function (k) { selectedKeys.add(k); });
      updateSelectionUI();
    });
    document.getElementById("lightbox-download").addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      downloadLightboxImage();
    });
    document.getElementById("lightbox-prev").addEventListener("click", function (e) {
      e.stopPropagation();
      goPrev();
    });
    document.getElementById("lightbox-next").addEventListener("click", function (e) {
      e.stopPropagation();
      goNext();
    });
    document.getElementById("lightbox").addEventListener("click", function (e) {
      if (e.target.id === "lightbox") closeLightbox();
    });
    document.addEventListener("keydown", onKeydown);
  }

  init();
})();
