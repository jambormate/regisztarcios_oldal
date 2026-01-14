const form = document.getElementById('registerForm');
      const sikeres = document.getElementById('app');
      form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        form.reset();
        sikeres.innerHTML = '<div class="alert alert-success">Sikeres regisztráció</div>';
      });
