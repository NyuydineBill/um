
    document.addEventListener("DOMContentLoaded", function() {
        var readMoreButtons = document.querySelectorAll('.read-more');
        readMoreButtons.forEach(function(button) {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                var cardBody = this.parentElement;
                var text = cardBody.querySelector('.card-text');
                if (text.classList.contains('truncate')) {
                    text.classList.remove('truncate');
                    this.textContent = 'Read Less';
                } else {
                    text.classList.add('truncate');
                    this.textContent = 'Read More';
                }
            });
        });

        $(document).ready(function() {
            $('#commentForm').submit(function(event) {
                event.preventDefault();
                var commentText = $('#comment').val();
                if (commentText.trim() !== '') {
                    var randomSize = Math.floor(Math.random() * 21) + 30; // Generates a random number between 30 and 50
                    var commentHtml = '<div class="media mb-4">' +
                        '<div class="commenter-info d-flex align-items-center mr-3">' +
                        '<img src="https://picsum.photos/' + randomSize + '" class="rounded-circle" alt="User Avatar">' +
                        '<h5 class="mt-0 ml-5">Eddy</h5>' +
                        '</div>' +
                        '<div class="media-body">' +
                        '<p class="comment-text">' + commentText + '</p>' +
                        '<div class="comment-footer">' +
                        '<span class="text-muted mr-2"><i class="far fa-thumbs-up"></i> 0</span>' +
                        '<a href="#" class="text-muted"><i class="far fa-comment"></i> Reply</a>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
        
                    $('.card.my-4').after(commentHtml);
                    $('#comment').val('');
                }
            });
        });
        
    });

