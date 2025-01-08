$(document).ready(function(){
	function toggle_click_sidebar() {
	// Klik pada tombol atau link tautan
	    $(".toggle-click-sidebar").on("click", function(e){
	      $("body").addClass("show-sidebar noscroll");
      });

	  // Tutup atau Hapus Bars
      function close_click_sidebar() {
        // Sembunyikan kembali modal Bars
        $("body").removeClass("show-sidebar noscroll");
}

      // Jika tombol/elemen 'tutup', atau overlay diklik
	    $('body').on('click', '.close-label, .exfra-sidebar + .sidebar-overlay', function(event) {
          // Hibungi tutup dan
          close_click_sidebar();
      });
      // Jika tombol ESC diketuk
      $('body').keyup(function(e) {
          // Kunci ESC dipetakan ke kode kunci `27`
          if (e.keyCode == 27) { 
            // Panggil fungsi tutup dan setel ulang
            close_click_sidebar();
          }
      });
	}
	toggle_click_sidebar();
    
    
    function toggle_click_archive() {
	// Klik pada tombol atau link tautan
	    $(".toggle-click-archive").on("click", function(e){
	      $("body").addClass("show-post-sidebar noscroll");
      });

	  // Tutup atau Hapus Bars
      function close_click_archive() {
        // Sembunyikan kembali modal Bars
        $("body").removeClass("show-post-sidebar noscroll");
}

      // Jika tombol/elemen 'tutup', atau overlay diklik
	    $('body').on('click', '.close-archive, .container-modal-archive .overlay', function(event) {
          // Hibungi tutup dan
          close_click_archive();
      });
      // Jika tombol ESC diketuk
      $('body').keyup(function(e) {
          // Kunci ESC dipetakan ke kode kunci `27`
          if (e.keyCode == 27) { 
            // Panggil fungsi tutup dan setel ulang
            close_click_archive();
          }
      });
	}
	toggle_click_archive();
  });
