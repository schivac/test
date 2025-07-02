<?php
include('config.php');
header('Content-Type: application/json');

$action = $_GET['action'] ?? '';

if ($action === 'login') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $username);
    mysqli_stmt_execute($stmt);
    $user = mysqli_stmt_get_result($stmt)->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        echo json_encode([
            'status' => 'success',
            'username' => $user['username'],
            'token' => bin2hex(random_bytes(16)) // Token sederhana
        ]);
    } else {
        echo json_encode(['status' => 'error']);
    }
}
?>