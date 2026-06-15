
    <form id="main-contact-form" name="contact-form" method="post" action="index.php#kontakt">
         <div class="form-group">
         <input type="text" id="nick" name="nick" class="form-control" placeholder="osoba do kontaktu" required>
         </div>
         <div class="form-group">
         <input type="email" id="mail" name="mail" class="form-control" placeholder="email" required>
         </div>
         <div class="form-group">
         <input type="text" id="temat" name="temat" class="form-control" placeholder="temat" required>
         </div>
         <div class="form-group">
         <textarea id="tresc" name="tresc" class="form-control" rows="8" placeholder="wiadomość" required></textarea>
         </div>
         <button type="submit" class="btn btn-primary">wyślij</button>
	</form>