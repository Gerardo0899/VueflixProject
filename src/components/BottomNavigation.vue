<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-gray-900 text-white flex justify-around py-2 border-t border-gray-800">
    <router-link to="/" class="text-center text-xs"><div>📺</div><span>Explore</span></router-link>
    <router-link to="/my-shows" class="text-center text-xs"><div>🎞️</div><span>My Shows</span></router-link>
    <router-link to="/calendar" class="text-center text-xs"><div>📅</div><span>Calendar</span></router-link>
    <router-link to="/notifications" class="text-center text-xs"><div>🔔</div><span>Notifications</span></router-link>
  </nav>
</template>