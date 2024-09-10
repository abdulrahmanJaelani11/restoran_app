<template>
    <section class="py-5 overflow-hidden bg-primary" id="home">
        <div class="container">
          <div class="row flex-center">
            <div class="col-md-5 col-lg-6 order-0 order-md-1 mt-8 mt-md-0"><a class="img-landing-banner" href="#!"><img class="img-fluid" src="../../assets/frontend/public/assets/img/gallery/hero-header.png" alt="hero-header" /></a></div>
            <div class="col-md-7 col-lg-6 py-8 text-md-start text-center">
              <h1 class="display-1 fs-md-5 fs-lg-6 fs-xl-8 text-light">Reservasi?</h1>
              <h1 class="text-800 mb-5 fs-4">Buat momen makan lebih istimewa. Lakukan reservasi meja dengan mudah dan cepat!</h1>
              <div class="card w-xxl-75">
                <div class="card-body">
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                      <button class="nav-link active mb-3" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><i class="fas fa-shopping-bag me-2"></i>Reservasi</button>
                      <!-- <button class="nav-link mb-3" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><i class="fas fa-shopping-bag me-2"></i>Pickup</button> -->
                    </div>
                  </nav>
                  <div class="tab-content mt-3" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <form class="row gx-2 gy-2 align-items-center">
                        <div class="col">
                          <div class="input-group-icon"><i class="fas fa-calendar text-danger input-box-icon"></i>
                            <label class="visually-hidden" for="inputDelivery">Address</label>
                            <input class="form-control input-box form-foodwagon-control" id="inputDelivery" type="date" placeholder="Enter Your Address" />
                          </div>
                        </div>
                        <div class="d-grid gap-3 col-sm-auto">
                          <button class="btn btn-danger" type="submit">Kirim</button>
                        </div>
                      </form>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <form class="row gx-4 gy-2 align-items-center">
                        <div class="col">
                          <div class="input-group-icon"><i class="fas fa-map-marker-alt text-danger input-box-icon"></i>
                            <label class="visually-hidden" for="inputPickup">Address</label>
                            <input class="form-control input-box form-foodwagon-control" id="inputPickup" type="text" placeholder="Enter Your Address" />
                          </div>
                        </div>
                        <div class="d-grid gap-3 col-sm-auto">
                          <button class="btn btn-danger" type="submit">Find Food</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

    <!-- ============================================-->
      <!-- <section> begin ============================-->
        <section class="py-0">

<div class="container">
  <div class="row h-100 gx-2 mt-7">
    <div class="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4" v-for="row in menu" :key="row.id">
      <div class="card card-span h-100">
        <div class="position-relative"> <img class="img-fluid rounded-3 w-100" :src="row.image_url" alt="..." />
          <div class="card-actions">
            <div class="badge badge-foodwagon bg-primary p-4">
              <div class="d-flex flex-between-center">
                <div class="text-white fs-7">15</div>
                <div class="d-block text-white fs-2">% <br />
                  <div class="fw-normal fs-1 mt-2">Off</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body px-0">
          <h5 class="fw-bold text-1000 text-truncate">{{ row.name }}</h5><span class="badge bg-soft-danger py-2 px-3"><span class="fs-1 text-danger">6 days Remaining</span></span>
        </div><a class="stretched-link" href="#"></a>
      </div>
    </div>
  </div>
</div><!-- end of .container-->

</section>
<!-- <section> close ============================-->
<!-- ============================================-->

 <!-- ============================================-->
<!-- <section> begin ============================-->
<section class="py-0 bg-primary-gradient">

<div class="container">
  <div class="row justify-content-center g-0">
    <div class="col-xl-9">
      <div class="col-lg-6 text-center mx-auto mb-3 mb-md-5 mt-4">
        <h5 class="fw-bold text-danger fs-3 fs-lg-5 lh-sm my-6">How does it work</h5>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-3 mb-6">
          <div class="text-center"><img class="shadow-icon" src="../../assets/frontend/public/assets/img/gallery/location.png" height="112" alt="..." />
            <h5 class="mt-4 fw-bold">Select location</h5>
            <p class="mb-md-0">Choose the location where your food will be delivered.</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-6">
          <div class="text-center"><img class="shadow-icon" src="../../assets/frontend/public/assets/img/gallery/order.png" height="112" alt="..." />
            <h5 class="mt-4 fw-bold">Choose order</h5>
            <p class="mb-md-0">Check over hundreds of menus to pick your favorite food</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-6">
          <div class="text-center"><img class="shadow-icon" src="../../assets/frontend/public/assets/img/gallery/pay.png" height="112" alt="..." />
            <h5 class="mt-4 fw-bold">Pay advanced</h5>
            <p class="mb-md-0">It's quick, safe, and simple. Select several methods of payment</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 mb-6">
          <div class="text-center"><img class="shadow-icon" src="../../assets/frontend/public/assets/img/gallery/meals.png" height="112" alt="..." />
            <h5 class="mt-4 fw-bold">Enjoy meals</h5>
            <p class="mb-md-0">Food is made and delivered directly to your home.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div><!-- end of .container-->

</section>
<!-- <section> close ============================-->
<!-- ============================================-->

 <!-- ============================================-->
      <!-- <section> begin ============================-->
        <section class="py-4 overflow-hidden">

<div class="container">
  <div class="row h-100">
    <div class="col-lg-7 mx-auto text-center mt-7 mb-5">
      <h5 class="fw-bold fs-3 fs-lg-5 lh-sm">Popular items</h5>
    </div>
    <div class="col-12">
      <div class="carousel slide" id="carouselPopularItems" data-bs-touch="false" data-bs-interval="false">
        <div class="carousel-inner">
          <div :class="'carousel-item ' + ((index == 0) ? 'active' : '')" v-for="(header, index) in menu_corausel" :key="header.menu_id" data-bs-interval="10000">
            <div class="row gx-3 h-100 align-items-center">
              <div class="col-sm-6 col-md-4 col-xl mb-5 h-100" v-for="row in header" :key="row.menu_id">
                <div class="card card-span h-100 rounded-3"><img class="img-fluid rounded-3 h-100" :src="row.image_url" alt="..." />
                  <div class="card-body ps-0">
                    <h5 class="fw-bold text-1000 text-truncate mb-1">{{ row.name }}</h5>
                    <div><span class="text-warning me-2"><i class="fas fa-map-marker-alt"></i></span><span class="text-primary">Burger Arena</span></div><span class="text-1000 fw-bold">{{ row.price }}</span>
                  </div>
                </div>
                <div class="d-grid gap-2"><a class="btn btn-lg btn-danger" href="#!" role="button">Order now</a></div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev carousel-icon" type="button" data-bs-target="#carouselPopularItems" data-bs-slide="prev"><span class="carousel-control-prev-icon hover-top-shadow" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button>
        <button class="carousel-control-next carousel-icon" type="button" data-bs-target="#carouselPopularItems" data-bs-slide="next"><span class="carousel-control-next-icon hover-top-shadow" aria-hidden="true"></span><span class="visually-hidden">Next </span></button>
      </div>
    </div>
  </div>
</div><!-- end of .container-->

</section>
<!-- <section> close ============================-->
<!-- ============================================-->
 
<section id="testimonial">
        <div class="container">
          <div class="row h-100">
            <div class="col-lg-7 mx-auto text-center mb-6">
              <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Featured Restaurants</h5>
            </div>
          </div>
          <div class="row gx-2">
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="../../assets/frontend/public/assets/img/gallery/food-world.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">20% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="../../assets/frontend/public/assets/img/gallery/food-world-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Food world</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">46</span>
                    </div>
                  </div><span class="badge bg-soft-danger p-2"><span class="fw-bold fs-1 text-danger">Opens Tomorrow</span></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="../../assets/frontend/public/assets/img/gallery/pizza-hub.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">10% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="../../assets/frontend/public/assets/img/gallery/pizzahub-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Pizza hub</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">40</span>
                    </div>
                  </div><span class="badge bg-soft-danger p-2"><span class="fw-bold fs-1 text-danger">Opens Tomorrow</span></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="../../assets/frontend/public/assets/img/gallery/donuts-hut.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">15% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="../../assets/frontend/public/assets/img/gallery/donuts-hut-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Donuts hut</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">20</span>
                    </div>
                  </div><span class="badge bg-soft-success p-2"><span class="fw-bold fs-1 text-success">Open Now</span></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="../../assets/frontend/public/assets/img/gallery/donuthut.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">15% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="../../assets/frontend/public/assets/img/gallery/donut-hut-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Donuts hut</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">50</span>
                    </div>
                  </div><span class="badge bg-soft-success p-2"><span class="fw-bold fs-1 text-success">Open Now</span></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="../../assets/frontend/public/assets/img/gallery/ruby-tuesday.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">10% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="../../assets/frontend/public/assets/img/gallery/ruby-tuesday-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Ruby tuesday</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">50</span>
                    </div>
                  </div><span class="badge bg-soft-success p-2"><span class="fw-bold fs-1 text-success">Open Now</span></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="../../assets/frontend/public/assets/img/gallery/kuakata.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">10% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="../../assets/frontend/public/assets/img/gallery/kuakata-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Kuakata Fried Chicken</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">50</span>
                    </div>
                  </div><span class="badge bg-soft-success p-2"><span class="fw-bold fs-1 text-success">Open Now</span></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="../../assets/frontend/public/assets/img/gallery/red-square.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">10% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="../../assets/frontend/public/assets/img/gallery/red-square-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Kuakata Fried Chicken</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">50</span>
                    </div>
                  </div><span class="badge bg-soft-success p-2"><span class="fw-bold fs-1 text-success">Open Now</span></span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div class="card card-span h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" src="../../assets/frontend/public/assets/img/gallery/taco-bell.png" alt="..." />
                <div class="card-img-overlay ps-0"><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">10% off</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-clock me-1 fs-0"></i><span class="fs-0">Fast</span></span></div>
                <div class="card-body ps-0">
                  <div class="d-flex align-items-center mb-3"><img class="img-fluid" src="../../assets/frontend/public/assets/img/gallery/taco-bell-logo.png" alt="" />
                    <div class="flex-1 ms-3">
                      <h5 class="mb-0 fw-bold text-1000">Taco bell</h5><span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">50</span>
                    </div>
                  </div><span class="badge bg-soft-success p-2"><span class="fw-bold fs-1 text-success">Open Now</span></span>
                </div>
              </div>
            </div>
            <div class="col-12 d-flex justify-content-center mt-5"> <a class="btn btn-lg btn-primary" href="#!">View All <i class="fas fa-chevron-right ms-2"> </i></a></div>
          </div>
        </div>
      </section>

      <!-- ============================================-->
      <!-- <section> begin ============================-->
        <section class="py-8 overflow-hidden">

<div class="container">
  <div class="row flex-center mb-6">
    <div class="col-lg-7">
      <h5 class="fw-bold fs-3 fs-lg-5 lh-sm text-center text-lg-start">Search by Food</h5>
    </div>
    <div class="col-lg-4 text-lg-end text-center"><a class="btn btn-lg text-800 me-2" href="#" role="button">VIEW ALL <i class="fas fa-chevron-right ms-2"></i></a></div>
    <div class="col-lg-auto position-relative">
      <button class="carousel-control-prev s-icon-prev carousel-icon" type="button" data-bs-target="#carouselSearchByFood" data-bs-slide="prev"><span class="carousel-control-prev-icon hover-top-shadow" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button>
      <button class="carousel-control-next s-icon-next carousel-icon" type="button" data-bs-target="#carouselSearchByFood" data-bs-slide="next"><span class="carousel-control-next-icon hover-top-shadow" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>
    </div>
  </div>
  <div class="row flex-center">
    <div class="col-12">
      <div class="carousel slide" id="carouselSearchByFood" data-bs-touch="false" data-bs-interval="false">
        <div class="carousel-inner">
          <div :class="'carousel-item ' + (index == 0 ? 'active' : '')" v-for="(header, index) in menu_corausel" :key="header.menu_id" data-bs-interval="10000">
            <div class="row h-100 align-items-center">
              <div class="col-sm-6 col-md-4 col-xl mb-5 h-100" v-for="row in header" :key="row.menu_id">
                <div class="card card-span h-100 rounded-circle"><img class="img-fluid rounded-circle h-100" :src="row.image_url" alt="..." />
                  <div class="card-body ps-0">
                    <h5 class="text-center fw-bold text-1000 text-truncate mb-2">pizza {{ row.name }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div><!-- end of .container-->

</section>
<!-- <section> close ============================-->
<!-- ============================================-->

      <!-- ============================================-->
      <!-- <section> begin ============================-->
        <section class="pb-5 pt-8"> 

        <div class="container">
        <div class="row">
            <div class="col-12">
            <div class="card card-span mb-3 shadow-lg">
                <div class="card-body py-0">
                <div class="row justify-content-center">
                    <div class="col-md-5 col-xl-7 col-xxl-8 g-0 order-0 order-md-1"><img class="img-fluid w-100 fit-cover h-100 rounded-top rounded-md-end rounded-md-top-0" src="../../assets/frontend/public/assets/img/gallery/crispy-sandwiches.png" alt="..." /></div>
                    <div class="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                    <h1 class="card-title mt-xl-5 mb-4">Best deals <span class="text-primary"> Crispy Sandwiches</span></h1>
                    <p class="fs-1">Enjoy the large size of sandwiches. Complete your meal with the perfect slice of sandwiches.</p>
                    <div class="d-grid bottom-0"><a class="btn btn-lg btn-primary mt-xl-6" href="#!">PROCEED TO ORDER<i class="fas fa-chevron-right ms-2"></i></a></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div><!-- end of .container-->

        </section>
        <!-- <section> close ============================-->
        <!-- ============================================-->

        <!-- ============================================-->
        <!-- <section> begin ============================-->
        <section class="py-0">

        <div class="container">
        <div class="row">
            <div class="col-12">
            <div class="card card-span mb-3 shadow-lg">
                <div class="card-body py-0">
                <div class="row justify-content-center">
                    <div class="col-md-5 col-xl-7 col-xxl-8 g-0 order-md-0"><img class="img-fluid w-100 fit-cover h-100 rounded-top rounded-md-start rounded-md-top-0" src="../../assets/frontend/public/assets/img/gallery/fried-chicken.png" alt="..." /></div>
                    <div class="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                    <h1 class="card-title mt-xl-5 mb-4">Celebrate parties with <span class="text-primary">Fried Chicken</span></h1>
                    <p class="fs-1">Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.</p>
                    <div class="d-grid bottom-0"><a class="btn btn-lg btn-primary mt-xl-6" href="#!">PROCEED TO ORDER<i class="fas fa-chevron-right ms-2"></i></a></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div><!-- end of .container-->

        </section>
        <!-- <section> close ============================-->
        <!-- ============================================-->

        <!-- ============================================-->
        <!-- <section> begin ============================-->
        <section class="pt-5">

        <div class="container">
        <div class="row">
            <div class="col-12">
            <div class="card card-span mb-3 shadow-lg">
                <div class="card-body py-0">
                <div class="row justify-content-center">
                    <div class="col-md-5 col-xl-7 col-xxl-8 g-0 order-0 order-md-1"><img class="img-fluid w-100 fit-cover h-100 rounded-top rounded-md-end rounded-md-top-0" src="../../assets/frontend/public/assets/img/gallery/pizza.png" alt="..." /></div>
                    <div class="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                    <h1 class="card-title mt-xl-5 mb-4">Wanna eat hot & <span class="text-primary">spicy Pizza?</span></h1>
                    <p class="fs-1">Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.</p>
                    <div class="d-grid bottom-0"><a class="btn btn-lg btn-primary mt-xl-6" href="#!">PROCEED TO ORDER<i class="fas fa-chevron-right ms-2"></i></a></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div><!-- end of .container-->

        </section>
        <!-- <section> close ============================-->
        <!-- ============================================-->

        <section class="py-0">
                <div class="bg-holder" :style="backgroundStyle">
                </div>
                <!--/.bg-holder-->

                <div class="container">
                <div class="row flex-center">
                    <div class="col-xxl-9 py-7 text-center">
                    <h1 class="fw-bold mb-4 text-white fs-6">Are you ready to order <br />with the best deals? </h1><a class="btn btn-danger" href="#"> PROCEED TO ORDER<i class="fas fa-chevron-right ms-2"></i></a>
                    </div>
                </div>
                </div>
        </section>
</template>

<script>
import backgroundImage from '../../assets/frontend/public/assets/img/gallery/cta-two-bg.png'
import axios from 'axios';

export default {
    data() {
        return {
            backgroundStyle: {
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            },
            menu : [],
            menu_corausel : [],
        }
    },
    mounted(){
      this.getMenu()
      this.getMenuCorausel()
    },
    methods:{
      async getMenu(){
          try {
            const response = await axios.get(this.$api + `menu`)
            console.log(response.data)
            if(response.data.status_code == 200){
              this.menu = await response.data.data
              console.log(this.menu)
            }
          } catch (error) {
            console.log(error)
          }
        },
      async getMenuCorausel(){
          try {
            const response = await axios.get(this.$api + `menu/get-menu-corausel`)
            if(response.data.status_code == 200){
              this.menu_corausel = await response.data.data
              console.log(this.menu_corausel)
            }
          } catch (error) {
            console.log(error)
          }
        },
    }
}
</script>

<style scoped>
.bg-holder {
}
</style>
