document.addEventListener('DOMContentLoaded', function () {
    var footer = `
        <footer>
            <p>&copy; 2023 In Marvel we trust since 1939.</p>
            <ul>
              <li><a href="${globalBasePath}pages/terms-of-service.html">Terms of Service</a></li>
              <br>
              <li><a href="${globalBasePath}pages/privacy-policy.html">Privacy Policy</a></li>
            </ul>

        </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footer;
});
