<?php
    echo password_hash('admin', PASSWORD_DEFAULT);
    // másik okos fv:
    password_verify("jelszó", "hash");
?>