document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Kirim ke PHP untuk validasi
    const response = await fetch('includes/auth.php?action=login', {
        method: 'POST',
        body: formData
    });
    const result = await response.json();

    if (result.status === 'success') {
        // Simpan data di Local Storage
        localStorage.setItem('auth', JSON.stringify({
            username: result.username,
            token: result.token
        }));
        window.location.href = 'dashboard.php';
    } else {
        alert('Login gagal!');
    }
});

// Cek Local Storage saat halaman dimuat
if (window.location.pathname.includes('dashboard.php')) {
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (!auth?.token) {
        window.location.href = 'login.php';
    }
}