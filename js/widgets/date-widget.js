/**
 * Date Widget Initialization
 * Displays the current date in a formatted string
 */

(function() {
  'use strict';

  /**
   * Initialize the date widget
   */
  function initDateWidget() {
    const dateElement = document.getElementById('currentDate');

    if (!dateElement) {
      console.error('Date widget element not found');
      return;
    }

    // Get current date
    const currentDate = new Date();

    // Format the date using utility function
    const formattedDate = formatDate(currentDate);

    // Update the DOM
    dateElement.textContent = formattedDate;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDateWidget);
  } else {
    // DOM is already loaded
    initDateWidget();
  }
})();
