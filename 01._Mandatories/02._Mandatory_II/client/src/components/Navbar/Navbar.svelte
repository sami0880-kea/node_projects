<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
    import { navigate } from "svelte-routing";
    import { user } from '../../stores/userStore.js';
    import { DarkMode } from 'flowbite-svelte';

    async function logout() {
        try {
            const response = await fetch('http://localhost:8080/api/logout', {
                method: 'POST',
                credentials: 'include',
            });

            if (response.ok) {
                user.set({ email: null });
                navigate("/login", { replace: true });
            } else {
                console.error("Failed to log out");
            }
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }
 </script>
  
  <Navbar>
    <NavBrand href="/">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Dyson_logo.svg/1280px-Dyson_logo.svg.png" class="me-3 h-6 sm:h-9" alt="Google Logo" />
    </NavBrand>
    <div class="flex items-center md:order-2">
      <DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800 mx-4" />
      <Avatar id="avatar-menu" src="https://www.shareicon.net/data/2016/05/26/771200_man_512x512.png" />
      <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
    </div>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
      <DropdownHeader>
        <span class="block text-sm">{$user.name}</span>
        <span class="block truncate text-sm font-medium">{$user.email}</span>
      </DropdownHeader>
      <DropdownItem>My Account</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownDivider />
      <DropdownItem on:click={logout}>Sign out</DropdownItem>
    </Dropdown>
    <NavUl>
      <NavLi href="#" active={true}>Home</NavLi>
      <NavLi href="#">Contact Us</NavLi>
    </NavUl>
  </Navbar>