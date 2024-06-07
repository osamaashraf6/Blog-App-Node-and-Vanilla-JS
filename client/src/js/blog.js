// All required elements
const newsData = document.querySelector("#news-data");
const parmodal = document.querySelector(".parmodal");
const modal = document.querySelector(".parmodal_modal");

// Get data from API
const getData = async () => {
  const res = await fetch("http://localhost:5000/api/posts");
  const data = await res.json();
  return data;
};

// Popup list
const popupList = async (id) => {
  const res = await fetch(`http://localhost:5000/api/posts/${id}`);
  const data = await res.json();
  return data;
};
// Popup list Read
const popupListRead = (arra) => {
  const arr = [];
  arr.push(arra);
  if (arr.length > 0) {
    modal.innerHTML = "";
    arr.forEach((item) => {
      modal.innerHTML = `
      <!-- Start nav -->
      <header class="bg-[#ac3246] h-[72px] flex items-center mb-5">
        <div class="container-wrapper">
          <div class="parnav flex justify-between items-center max-sm:flex-col">
            <div
              class="brand max-sm:w-full max-sm:flex max-sm:justify-between max-sm:items-center"
            >
              <a href="/client/index.html" class="text-2xl text-white font-bold"
                >Blog App</a
              >
              <div class="hamburger-control">
                <label
                  class="bars text-2xl cursor-pointer hidden max-sm:flex"
                  for="bars"
                  ><i class="fas fa-bars"></i
                ></label>
                <label class="close text-2xl cursor-pointer hidden" for="times"
                  ><i class="fas fa-times"></i
                ></label>
              </div>
            </div>
            <nav class="navigation max-sm:w-full max-sm:hidden">
              <ul class="flex gap-1 max-sm:w-full">
                <li>
                  <a
                    href="/client/index.html"
                    class="text-white text-sm pb-[25.5px] pt-[27.5px] px-4 hover:bg-white hover:text-red-500 delay transition ease-in-out"
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    href="/client/src/pages/about.html"
                    class="text-white text-sm pb-[25.5px] pt-[27.5px] px-4 hover:bg-white hover:text-red-500 delay transition ease-in-out"
                    >About</a
                  >
                </li>
                <li>
                  <a
                    href="/client/src/pages/contact.html"
                    class="text-white text-sm pb-[25.5px] pt-[27.5px] px-4 hover:bg-white hover:text-red-500 delay transition ease-in-out"
                    >Contact</a
                  >
                </li>
                <li>
                  <a
                    href="/client/src/pages/blog.html"
                    class="text-white text-sm pb-[25.5px] pt-[27.5px] px-4 hover:bg-white hover:text-red-500 delay transition ease-in-out"
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    href="/client/src/pages/dashboard.html"
                    class="text-white text-sm pb-[25.5px] pt-[27.5px] px-4 hover:bg-white hover:text-red-500 delay transition ease-in-out"
                    >Dashboard</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section class="pb-8 ">
      <div class="container-wrapper ">
      <button class="closeModal py-5 mb-5 hover:bg-gray-300 w-[40px] h-[40px] rounded-full flex justify-center items-center"><i class="fas fa-arrow-left"></i></button>
         
      
      
      <div class="flex flex-col  gap-8 max-[1225px]:overflow-y-scroll max-[1225px]:h-[70vh] max-[1225px]:p-[24px] max-[1225px]:border-2 max-[1225px]:border-red-500 max-[960px]:p-[24px]">
            <div class="items-center flex gap-10  max-[1225px]:flex-col-reverse">
              <div class="flex flex-col gap-6 grow w-14 max-[1225px]:w-full">
                <h1 class="text-3xl font-bold text-red-400">
                  ${item.title}
                </h1>
                <p class="text-sm text-gray-400">${item.shortDesc}</p>
                <div class="flex items-center max-[1225px]:items-start justify-between max-[1225px]:shadow-xl max-[1225px]:p-4 max-[1225px]:rounded-lg max-[660px]:flex-col max-[660px]:gap-4">
                  <div class="flex items-center gap-4">
                    <img
                      src=${item.img}
                      alt="userImg"
                      width=30
                      height=25
                      class="rounded-full"
                    />
                    <span class="text-sm text-gray-600 pr-16">
                    ${item.author}
                  </span>
                  </div>
                 
                  <p class="text-sm text-gray-400"><span class="text-red-700 font-semibold">Created At: </span> ${item.createdAt}</p>

                </div>
              </div>
              <div class="grow w-14 max-[1225px]:w-full">
                <div class="item-responsive">
                  <img
                    src=${item.img}
                    alt="itemImg"
                    width=485
                    height=30
                    class="h-56"
                  />
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-500 text-justify">${item.desc}</p>
            <h2 class="font-bold">Important information about it!</h2>
            <p class="text-sm text-gray-500 text-justify">${item.desc}<p/>
            <div />
          </div>
      
      </div>
    </section>
        `;
      const closeModal = document.querySelector(".closeModal");
      closeModal.addEventListener("click", () => {
        parmodal.style.display = "none";
      });
    });
  } else {
    modal.innerHTML = "Loading";
  }
  parmodal.style.display = "block";
};
// Display news data
const popupLists = (arr) => {
  if (arr.length > 0) {
    newsData.innerHTML = "";
    arr.forEach((item) => {
      newsData.innerHTML += `
        <div class="flex items-center gap-1  shadow-xl max-[1070px]:flex-col">
        <div class="w-1/4 max-[1070px]:w-full max-[1070px]:p-6">
          <div class="posts-responsive max-[1070px]:h-[50vh]">
            <img
              src=${item.img}
              alt="postsImg"
              width="200"
              height="200"
              class="max-[1070px]:w-full max-[1070px]:object-cover max-[1070px]:h-full"
            />
          </div>
        </div>
        <div class="flex flex-col gap-3 w-3/4 max-[1070px]:w-full max-[1070px]:p-6  pt-4 max-sm:px-4 max-sm:pb-16 max-sm:relative">
          <h2 class="text-2xl font-semibold capitalize w-3/4 text-red-500 max-sm:text-xl max-sm:w-full">
           ${item.title}
          </h2>
          <p class="pr-[250px] max-sm:pr-0 text-sm text-gray-400 ">
          ${item.shortDesc}
  
          </p>
          <button id=${item._id} class="detailBtn text-xs max-sm:absolute max-sm:bottom-0 max-sm:right-0 bg-[#ac3246] rounded px-2 py-3 max-sm:py-2 max-sm:px-3 font-medium text-white w-[140px] hover:bg-red-800 shadow-lg transition delay ease-in-out">See details</button>
        </div>
      </div>
        `;
      // =======
      const detailBtns = document.querySelectorAll(".detailBtn");
      detailBtns.forEach((item) => {
        item.addEventListener("click", async (e) => {
          const ids = e.target.id;
          const r = await popupList(ids);
          popupListRead(r);
        });
      });
    });
  } else {
    newsData.innerHTML = "Loading";
  }
};
getData().then(popupLists);
