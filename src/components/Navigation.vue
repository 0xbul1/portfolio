<template>
  <nav>
    <div class="container">
      <div class="nav-columns">
        <div class="nav-column">
          <div class="nav-label">Menu</div>
          <ul class="nav-links">
            <li>
              <a to="/case-studies" exact> Case Studies </a>
            </li>
            <li>
              <a to="/approach" exact> Approach </a>
            </li>
            <li>
              <a to="/services" exact> Services </a>
            </li>
            <li>
              <a to="/about-us" exact> About us </a>
            </li>
          </ul>
        </div>
        <div class="nav-column">
          <div class="nav-label">Contact</div>
          <div class="nav-infos">
            <ul class="nav-info">
              <li class="nav-info-label">Email</li>
              <li>
                <a to="/contact" exact> Get in touch with us </a>
              </li>
              <li>
                <a to="/audit" exact> Get a free audit </a>
              </li>
            </ul>
            <ul class="nav-info">
              <li class="nav-info-label">Headquarter</li>
              <li>Route du Jura 49</li>
              <li>1700 Fribourg</li>
              <li>Switzerland</li>
            </ul>
            <ul class="nav-info">
              <li class="nav-info-label">Phone</li>
              <li>+41 (0) 79 510 28 70</li>
            </ul>
            <ul class="nav-info">
              <li class="nav-info-label">Legal</li>
              <li>Privacy & Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style></style>
