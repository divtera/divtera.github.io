---
layout: default
title: Home Equity Investments
---

<script type="text/javascript">var homeownerFormSubmitted=false;var investorFormSubmitted=false;</script>
<div class="position-relative">
  <!-- Hero for FREE version -->
  <section class="section section-sm section-hero section-shaped">
    <!-- Background circles -->
    <div class="shape shape-style-1 shape-primary">
      <span class="span-150"></span>
      <span class="span-50"></span>
      <span class="span-50"></span>
      <span class="span-75"></span>
      <span class="span-100"></span>
      <span class="span-75"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
    </div>
    <div class="container shape-container d-flex align-items-center py-lg">
      <div class="col px-0">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-7 mb-1 mb-lg-0">
            <h1 class="text-white font-weight-light">The marketplace for home equity.</h1>
            <p class="lead text-white mt-4">Unlocking wealth tied up in private, residential real estate.</p>
          </div>
          <div class="col-lg-5 mb-1 mb-lg-0">
            <div class="nav-wrapper">
              <ul class="nav nav-pills nav-fill nav-outline flex-xs-column flex-md-row" id="tabs-icons-text" role="tablist">
                <li class="nav-item pr-2">
                  <a 
                    class="nav-link mb-sm-3 mb-md-0 active btn-1 btn-outline-primary" 
                    id="homeowner-info-tab" 
                    data-toggle="tab" 
                    href="#homeowners-info-tab" 
                    role="tab" 
                    aria-controls="homeowners-info-tab" 
                    aria-selected="true" 
                    onClick="ga('send', 'event', 'Homeowner Tab', 'click', 'Homepage')">
                  <i class="fas fa-home mr-2"></i>Homeowners
                  </a>
                </li>
                <li class="nav-item">
                  <a 
                    class="nav-link mb-sm-3 mb-md-0 btn-1 btn-outline-primary" 
                    id="tabs-icons-text-2-tab" 
                    data-toggle="tab" 
                    href="#tabs-icons-text-2" 
                    role="tab" 
                    aria-controls="tabs-icons-text-2" 
                    aria-selected="false"
                    onClick="ga('send', 'event', 'Investor Tab', 'click', 'Homepage')">
                  <i class="fas fa-chart-line mr-2"></i>Investors
                  </a>
                </li>
              </ul>
            </div>
            <div class="card shadow">
              <div class="card-body">
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="homeowners-info-tab" role="tabpanel" aria-labelledby="homeowner-info-tab">
                    <p><i class="fa fa-check text-success mr-3"></i>Sell up to 20% of your home's equity.</p>
                    <p><i class="fa fa-check text-success mr-3"></i>We'll find buyers to invest in your home.</p>
                    <p><i class="fa fa-check text-success mr-3"></i>The money's yours - interest free.</p>
                    <div class="text-center">
                      <button type="button" class="btn btn-success mt-2 text-center" data-toggle="modal" data-target="#homeowner-modal-form"
                        onClick="ga('send', 'event', 'Homeowner Learn More', 'click', 'Homepage')"><i class="fa fa-unlock mr-3"></i>Unlock your wealth.</button>
                    </div>
                    <div class="modal fade" id="homeowner-modal-form" tabindex="-1" role="dialog" aria-labelledby="homeowner-modal-form" style="display: none;" aria-hidden="true">
                      <div class="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
                        <div class="modal-content">
                          <div class="modal-body p-0">
                            <div class="card bg-secondary shadow border-0">
                              <div class="card-body px-lg-5 py-lg-5 homeowner-form-body">
                                {% include contact.html %}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tabs-icons-text-2" role="tabpanel" aria-labelledby="tabs-icons-text-2-tab">
                    <p><i class="fa fa-check text-success mr-3"></i> Diversify your investment portfolio.</p>
                    <p><i class="fa fa-check text-success mr-3"></i> Increase your exposure to residential estate</p>
                    <p><i class="fa fa-check text-success mr-3"></i> Invest in real estate for as little as $500.</p>
                    <div class="text-center">
                      <button type="button" class="btn btn-success mt-2 text-center" data-toggle="modal" data-target="#investor-modal-form" onClick="ga('send', 'event', 'Investor Learn More', 'click', 'Homepage')"><i class="fas fa-dollar-sign mr-3"></i>Start investing</button>
                    </div>
                    <div class="modal fade" id="investor-modal-form" tabindex="-1" role="dialog" aria-labelledby="investor-modal-form" style="display: none;" aria-hidden="true">
                      <div class="modal-dialog modal- modal-dialog-centered modal-sm" role="document">
                        <div class="modal-content">
                          <div class="modal-body p-0">
                            <div class="card bg-secondary shadow border-0">
                              <div class="card-body px-lg-5 py-lg-5 investor-form-body">
                                <form action="https://docs.google.com/forms/d/e/1FAIpQLSfUacJUI-oz_cD_CGMtCdAH_WR0M2qxBNahG1AIzVoXIeqejA/formResponse"
                                  target="hidden_iframe_investor"
                                  id="investorGoogleForm"
                                  role="form"
                                  onsubmit="investorFormSubmitted=true;"
                                  method="POST">
                                  <!-- Field type: "short" id: "515256240" -->
                                  <div class="form-group mb-3">
                                    <div class="input-group input-group-alternative">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                      </div>
                                      <input id="1412930648" type="text" name="entry.1412930648" class="form-control" placeholder="Name" required>
                                    </div>
                                  </div>
                                  <!-- Field type: "short" id: "158563703" -->
                                  <div class="form-group mb-3">
                                    <div class="input-group input-group-alternative">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                      </div>
                                      <input id="1395377492" type="email" name="entry.1395377492" class="form-control" placeholder="Email" required>
                                    </div>
                                  </div>
                                  <!-- Field type: "choices" id: "1631184235" -->
                                  <input type="hidden" name="entry.1148005771" id="entry.1148005771" value="Investor" >
                                  <!-- Field type: "short" id: "278958465" -->
                                  <div class="form-group mb-3">
                                    <div class="input-group input-group-alternative">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                      </div>
                                      <input id="1913009280" type="text" name="entry.1913009280" class="form-control" placeholder="Where do you live?" required>
                                    </div>
                                  </div>
                                  <input type="hidden" name="fvv" value="1">
                                  <input type="hidden" name="fbzx" value="6553451801892242422">
                                  <!--
                                    CAVEAT: In multipages (multisection) forms, *pageHistory* field tells to google what sections we've currently completed.
                                    This usually starts as "0" for the first page, then "0,1" in the second page... up to "0,1,2..N" in n-th page.
                                    Keep this in mind if you plan to change this code to recreate any sort of multipage-feature in your exported form.
                                    We're setting this to the total number of pages in this form because we're sending all fields from all the section together.
                                    -->
                                  <input type="hidden" name="pageHistory" value="0">
                                  <div class="text-center">
                                    <button type="submit" value="Submit" class="btn btn-primary my-4">Submit</button>
                                  </div>
                                </form>
                                <iframe name="hidden_iframe_investor" id="hidden_iframe_investor" style="display:none;" onload="if(investorFormSubmitted) {}"></iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SVG separator -->
    <div class="separator separator-bottom separator-skew zindex-100">
      <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="row align-items-center align-top">
        <div class="col-lg-3">
          <p class="text-center">
            <i class="fas fa-home fa-4x text-center"></i>
          </p>
          <p>We work with homeowners to offer up to 20% of their home on the equity marketplace.</p>
        </div>
        <div class="col-lg-3">
          <p class="text-center">
            <i class="far fa-copy fa-4x text-center"></i>
          </p>
          <p>Next, we'll divide the offering into smaller "shares", which are offered to investors.</p>
        </div>
        <div class="col-lg-3">
          <p class="text-center">
            <i class="fas fa-dollar-sign fa-4x text-center align-top"></i>
          </p>
          <p>Investors can purchase individual shares in the newly listed home.</p>
        </div>
        <div class="col-lg-3">
          <p class="text-center">
            <i class="far fa-envelope-open fa-4x text-center"></i>
          </p>
          <p>Once all the shares have been purchased, the homeowner gets their money.</p>
        </div>
      </div>
    </div>
  </section>
</div>