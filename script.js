document.getElementById('show-more-btn').addEventListener('click', function() {
    var moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === 'none') {
      moreInfo.style.display = 'block';
      this.textContent = 'Show Less';
    } else {
      moreInfo.style.display = 'none';
      this.textContent = 'Show More';
    }
  });