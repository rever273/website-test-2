document.addEventListener('DOMContentLoaded', function () {
    var header = `
        <header>
            <a href="${globalBasePath}index.html">
                <img src="${globalBasePath}images/logo1.png" alt="M Logo">
            </a>

            <nav>
                <ul>
                    <li><a href="${globalBasePath}index.html">Main</a></li>
                    <li class="dropdown">
                        <a href="javascript:void(0)" class="dropbtn">About</a>
                        <div class="dropdown-content">
                            <a href="${globalBasePath}pages/distribution.html">Distribution</a>
                            <a href="${globalBasePath}pages/anatomy.html">Anatomy</a>
                            <a href="${globalBasePath}pages/size.html">Size</a>
                            <a href="${globalBasePath}pages/adaptations.html">Adaptations</a>
                            <a href="${globalBasePath}pages/reproduction.html">Reproduction</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    `;
    document.getElementById('header-placeholder').innerHTML = header;
});

