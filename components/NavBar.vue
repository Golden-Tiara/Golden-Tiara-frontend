<template>
  <!-- Not Logged In -->
  <nav class="bg-white w-full border-b border-b-gold sticky top-0 left-0 z-20">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <MenuLink to="/" class="flex items-center">
        <img
          src="../assets/images/logo.png"
          class="h-10 mr-3"
          alt="Golden Tiara"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          ><span class="text-gold">G</span>olden
          <span class="text-gold">T</span>iara</span
        >
      </MenuLink>

      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <div class="md:order-2 pl-8">
          <button
            type="button"
            class="text-white font-light bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >
            เข้าสู่ระบบ
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
        >
          <li>
            <MenuLink
              to="/services"
              class="relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center
"
              >เซอร์วิส
            </MenuLink>
          </li>
          <li>
            <MenuLink
              href="#"
              class="relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >ราคาทอง
            </MenuLink>
          </li>
          <li>
            <MenuLink
              href="#"
              class="relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >สอบถาม
            </MenuLink>
          </li>
          <li>
            <MenuLink
              href="#"
              class="relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              >ติดต่อเรา
            </MenuLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Logged In -->

  <!-- <nav class="bg-white w-full border-b border-b-gold sticky top-0 left-0 z-20">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="https://flowbite.com/" class="flex items-center">
        <img
          src="../assets/images/logo.png"
          class="h-10 mr-3"
          alt="Golden Tiara"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          ><span class="text-gold">G</span>olden
          <span class="text-gold">T</span>iara</span
        >
      </a>
      <div class="flex items-center md:order-2">
        <button
          type="button"
          class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span class="sr-only">Open user menu</span>
          <img
            class="w-12 h-12 rounded-full object-fit border-2 border-gold"
            src="@/assets/images/team/ping.png"
            alt="user photo"
          />
        </button> -->

        <!-- Dropdown menu -->


        <!-- <div

          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
          id="user-dropdown"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white"
              >name</span
            >
            <span
              class="block text-sm text-gray-500 truncate dark:text-gray-400"
              >email</span
            >
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-light"
                >เมนูทั้งหมด</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Earnings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >Sign out</a
              >
            </li>
          </ul>
        </div>


        <button
          data-collapse-toggle="navbar-user"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-user"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-user"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
        >
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >Pricing</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
</template>
