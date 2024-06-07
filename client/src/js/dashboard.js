// All required elements
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const shortDesc = document.querySelector("#short-desc");
const image = document.querySelector("#image");
const content = document.querySelector("#content");
const error = document.querySelector(".error");
const submit = document.querySelector("#submit");
const recentPostsContainer = document.querySelector("#recent-posts");

// Post data in API
const postData = async () => {
  const res = await fetch("http://localhost:5000/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title.value,
      author: author.value,
      shortDesc: shortDesc.value,
      img: image.value,
      desc: content.value,
    }),
  });
  await res.json();
};

submit.addEventListener("click", (e) => {
  if (
    title.value === "" ||
    author.value === "" ||
    shortDesc.value === "" ||
    image.value === "" ||
    content.value === ""
  ) {
    e.preventDefault();
    error.innerHTML = "Please, fill the form with valid data !";
  } else {
    e.preventDefault();
    error.innerHTML = "";
    postData();
    location.reload();
  }
});
// =================================================================

// Get ecentData from API
const getRecentData = async () => {
  const res = await fetch("http://localhost:5000/api/posts?new=true");
  const data = await res.json();
  return data;
};

// Delete Data from API
const deleteData = async (id) => {
  const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  await res.json();
};
// Display recentPosts
const recentPosts = (arr) => {
  if (arr.length > 0) {
    recentPostsContainer.innerHTML = "";
    arr.forEach((item) => {
      recentPostsContainer.innerHTML += `
      <div class="flex justify-between shadow-2xl gap-5 max-sm:flex-col">


      <div class="w-[25%] max-sm:w-full">
        <div class="posts-responsive max-sm:h-[30vh]">
          <img src=${item.img} alt="" class="h-full w-full object-cover"/>
        </div>
      </div>



      <div class="w-[75%] relative max-sm:pb-16 pt-4 max-sm:px-6 max-sm:w-full">
      <div class="flex flex-col gap-3 ">
        <h2 class="text-xl font-bold text-red-500 capitalize">
         ${item.title}
        </h2>
        <p class="text-sm text-gray-400">${item.shortDesc}</p>
        <p class="text-sm text-gray-400"><span class="text-red-700 font-semibold">Created At : </span> ${item.createdAt}</p>
      </div>
    
        <button id=${item._id} class="removeBtn bg-red-700 rounded text-white text-xs px-3 py-1 absolute bottom-0 right-0 hover:bg-red-500 transition delay ease-in-out ">Delete</button>
   
      </div>


    </div>
        `;

      // =====
      const times = document.querySelectorAll(".removeBtn");
      times.forEach((item) => {
        item.addEventListener("click", (e) => {
          const ids = e.target.id;
          deleteData(ids);
          getRecentData().then(recentPosts);
          location.reload();
        });
      });
    });
  } else {
    recentPostsContainer.innerHTML = ` <span
    class="text-red-500 shadow-2xl text-center text-sm font-semibold "
  >
    No Available Posts for you Add now 😊
  </span>`;
  }
};
getRecentData().then(recentPosts);
