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
    
    
    function toggle_post_sidebar() {
	// Klik pada tombol atau link tautan
	    $(".toggle-post-sidebar").on("click", function(e){
	      $("body").addClass("show-post-sidebar noscroll");
      });

	  // Tutup atau Hapus Bars
      function close_post_sidebar() {
        // Sembunyikan kembali modal Bars
        $("body").removeClass("show-post-sidebar noscroll");
}

      // Jika tombol/elemen 'tutup', atau overlay diklik
	    $('body').on('click', '.close-post-sidebar, .container-modal-post .overlay', function(event) {
          // Hibungi tutup dan
          close_post_sidebar();
      });
      // Jika tombol ESC diketuk
      $('body').keyup(function(e) {
          // Kunci ESC dipetakan ke kode kunci `27`
          if (e.keyCode == 27) { 
            // Panggil fungsi tutup dan setel ulang
            close_post_sidebar();
          }
      });
	}
	toggle_post_sidebar();
  });
