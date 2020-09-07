import { Component } from '@angular/core';
// required plugins from capacitor
import { Plugins, CameraResultType, CameraSource, Capacitor } from '@capacitor/core';
// Sanitizer from angular to safely sanitize urls
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  photo: SafeResourceUrl; // url of the photo location in your device's storage

  constructor( private sanitizer: DomSanitizer) { // dep injection

  }

  async takePhoto(){
    // logic to take photo
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    }).then( (photo ) => { // when photo taken successfully
      console.log('Photo taken successfully!');
      // this makes sure we access the photo from camera, and image data url in secure way
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(photo && (photo.dataUrl));
    }).catch( (err) => {
      console.log(err); // standard err would be available
      console.log('Cancelled the action');
    }).finally( () => {
      console.log('It is over');
    });
  }

}
