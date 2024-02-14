// Function to retrieve bookings from local storage
function getBookings() {
    // Retrieve existing bookings from local storage
    return JSON.parse(localStorage.getItem('bookings')) || [];
}

// Function to display bookings on the page
function displayBookings() {
    var bookings = getBookings();
    var bookingsListDiv = document.getElementById('bookingsList');

    if (bookings.length === 0) {
        bookingsListDiv.innerHTML = '<p>No bookings available.</p>';
    } else {
        var html = '<ul>';
        for (var i = 0; i < bookings.length; i++) {
            html += '<li>';
            html += '<div><strong>Service:</strong> ' + bookings[i].service +
                    ', <strong>Date:</strong> ' + bookings[i].date +
                    ', <strong>Time:</strong> ' + bookings[i].time +
                    ', <strong>Name:</strong> ' + bookings[i].name +
                    ', <strong>Email:</strong> ' + bookings[i].email + '</div>';
            html += '<button class="markDoneButton" onclick="markAsDone(' + i + ')">Mark as Done</button>';
            html += '</li>';
        }
        html += '</ul>';

        bookingsListDiv.innerHTML = html;
    }
}

// Function to mark a booking as done
// Function to mark a booking as done and remove it from the list
function markAsDone(index) {
    var bookings = getBookings();

    // Remove the booking from the array
    var removedBooking = bookings.splice(index, 1)[0];

    // Save the updated list back to local storage
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Refresh the display
    displayBookings();

    // You can perform additional actions with the removed booking, e.g., send confirmation email, etc.
    console.log('Booking marked as done:', removedBooking);
}


// Call the displayBookings function when the page loads
window.onload = function() {
    displayBookings();
};
