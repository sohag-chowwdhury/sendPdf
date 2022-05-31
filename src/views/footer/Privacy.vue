<template>
  <div class="main">
    <h5 class="sub__heading">Send PDF by Mail</h5>
    <h2>Privacy Policy</h2>

    <div class="list__container">
      <div class="list__number">1</div>
      <div>
        <div>
          <h2 class="list__heading">WHAT INFORMATION DO YOU COLLECT?</h2>
          <p class="list__paragraph">
            When you mail a letter on our site, as part of the order process, we
            collect the personal information you give us such as your and your
            recipient’s name and address, as well as the contents of the letter.
          </p>
          <p class="list__paragraph">
            When you browse the site, we also automatically receive your
            computer’s internet protocol (IP) address and some information about
            your browser and operating system.
          </p>
        </div>
      </div>
    </div>

    <div class="list__container">
      <div class="list__number">2</div>
      <div>
        <div>
          <h2 class="list__heading">HOW DO YOU GET MY CONSENT?</h2>
          <p class="list__paragraph">
            When you provide us with personal information to complete a
            transaction, verify your credit card, place an order, we imply that
            you consent to our collecting it and using it for that specific
            reason only.
          </p>
          <p class="list__paragraph">
            If we ask for your personal information for a secondary reason, like
            marketing, we will either ask you directly for your expressed
            consent, or provide you with an opportunity to say no
          </p>
        </div>
      </div>
    </div>

    <div class="list__container">
      <div class="list__number">3</div>
      <div>
        <div>
          <h2 class="list__heading">GENERAL CONDITIONS</h2>
          <p class="list__paragraph">
            We reserve the right to refuse service to anyone for any reason at
            any time.
          </p>
          <p class="list__paragraph">
            You agree not to reproduce, duplicate, copy, sell, resell or exploit
            any portion of the Service, use of the Service, or access to the
            Service or any contact on the website through which the service is
            provided, without express written permission by us.
          </p>
          <p class="list__paragraph">
            The headings used in this agreement are included for convenience
            only and will not limit or otherwise affect these Terms.
          </p>
        </div>
      </div>
    </div>

    <div class="list__container">
      <div class="list__number">4</div>
      <div>
        <div>
          <h2 class="list__heading">
            ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
          </h2>
          <p class="list__paragraph">
            We are not responsible if information made available on this site is
            not accurate, complete or current. The material on this site is
            provided for general information only and should not be relied upon
            or used as the sole basis for making decisions without consulting
            primary, more accurate, more complete or more timely sources of
            information. Any reliance on the material on this site is at your
            own risk.
          </p>
          <p class="list__paragraph">
            This site may contain certain historical information. Historical
            information, necessarily, is not current and is provided for your
            reference only. We reserve the right to modify the contents of this
            site at any time, but we have no obligation to update any
            information on our site. You agree that it is your responsibility to
            monitor changes to our site.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  margin-left: auto;
  margin-right: auto;
  max-width: 592px;
  padding: 32px 32px 32px 48px;
}

.sub__heading {
  color: #4ca;
  font-size: 20px;
  font-weight: 700;
  font-family: "Rubik", sans-serif;
  margin: 0 0 32px;
}

h2 {
  font-size: 28px;
  font-weight: 700;
  font-family: "Rubik", sans-serif;
}

.list__container {
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  margin-left: -30px;
  margin-top: 32px;
}
.list__number {
  color: #e4dddd;
  font-size: 16px;
  font-weight: 700;
  font-family: "Rubik", sans-serif;
  margin-top: -2px;
}
.list__heading {
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 700;
  font-family: "Rubik", sans-serif;
}

.list__paragraph {
  color: #112222;
  margin: 0 0 8px;
  font-size: 13px;
  font-family: "Rubik", sans-serif;
  line-height: 25px;
  margin-top: 20px;
}
</style>
