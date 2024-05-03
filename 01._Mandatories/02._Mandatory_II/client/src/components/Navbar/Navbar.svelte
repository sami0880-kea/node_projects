<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
    import { navigate } from "svelte-routing";
    import { user } from '../../stores/userStore.js';
    import { DarkMode } from 'flowbite-svelte';
    import { derived } from 'svelte/store';
    
    const userInfo = derived(user, $user => $user ?? 'User');  

    let activeUrl = window.location.pathname;

    async function logout() {
        try {
            const response = await fetch('http://localhost:8080/api/logout', {
                method: 'POST',
                credentials: 'include',
            });

            if (response.ok) {
                user.set(null);
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
    <NavBrand href="/dashboard">
      <img src="assets/images/logo-dark.png" class="dark:hidden me-3 h-6 sm:h-14" alt="Google Logo" />
      <img src="assets/images/logo-light.png" class="hidden dark:block me-3 h-6 sm:h-14" alt="Google Logo" />
    </NavBrand>
    <div class="flex items-center md:order-2">
      <DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800 mx-4" />
      <Avatar id="avatar-menu" src="https://www.shareicon.net/data/2016/05/26/771200_man_512x512.png" />
      <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
    </div>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
      <DropdownHeader>
        <span class="block text-sm">{$userInfo.name}</span>
      </DropdownHeader>
      <DropdownItem on:click={logout}>Sign out</DropdownItem>
    </Dropdown>
    <NavUl {activeUrl}>
      <NavLi href="/dashboard" active={true}>Dashboard</NavLi>
      <NavLi href="/contact">Contact Us</NavLi>
    </NavUl>
  </Navbar>