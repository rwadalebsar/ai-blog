// Auto-wrap tables in responsive containers for mobile compatibility
document.addEventListener('DOMContentLoaded', function() {
  // Find all tables that aren't already wrapped
  const tables = document.querySelectorAll('.main-content table:not(.table-responsive table)');
  
  tables.forEach(function(table) {
    // Skip if table is already wrapped
    if (table.parentElement.classList.contains('table-responsive')) {
      return;
    }
    
    // Create wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = 'table-responsive';
    
    // Insert wrapper before table
    table.parentNode.insertBefore(wrapper, table);
    
    // Move table into wrapper
    wrapper.appendChild(table);
  });
  
  // Add scroll indicators for better UX
  const responsiveTables = document.querySelectorAll('.table-responsive');
  
  responsiveTables.forEach(function(container) {
    const table = container.querySelector('table');
    if (!table) return;
    
    function updateScrollIndicators() {
      const isScrollable = table.scrollWidth > container.clientWidth;
      const isScrolledToEnd = container.scrollLeft >= (table.scrollWidth - container.clientWidth - 1);
      const isScrolledToStart = container.scrollLeft <= 1;
      
      // Add/remove classes for styling
      container.classList.toggle('scrollable', isScrollable);
      container.classList.toggle('scrolled-start', !isScrolledToStart && isScrollable);
      container.classList.toggle('scrolled-end', isScrolledToEnd && isScrollable);
    }
    
    // Check on load and resize
    updateScrollIndicators();
    window.addEventListener('resize', updateScrollIndicators);
    container.addEventListener('scroll', updateScrollIndicators);
  });
});
