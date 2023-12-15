document.addEventListener('DOMContentLoaded', function () {
    var header = `
        <header>
            <a href="index.html">
                <img src="../images/logo.png" alt="M Logo">
            </a>

            <nav>
                <ul>
                    <li><a href="../index.html">Main</a></li>
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">Characters</a>
                        <div class="dropdown-content">
                            <a href="../pages/loki.html">Loki</a>
                            <a href="../pages/rocket.html">Rocket</a>
                            <a href="../pages/scarlet-witch.html">Scarlet Witch</a>
                            <a href="../pages/deadpool.html">Deadpool</a>
                            <a href="../pages/korg.html">Korg</a>
                        </div>
                    </li>
                    <li><a href="../pages/contact.html">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    `;
    document.getElementById('header-placeholder').innerHTML = header;
});