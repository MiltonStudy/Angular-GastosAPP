import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-form-gastos',
  templateUrl: './form-gastos.component.html',
  styleUrls: ['./form-gastos.component.css'],
})
export class FormGastosComponent {
  imageURL: any;

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    let imageUrl = image.webPath;
    this.imageURL = imageUrl;
  };
}
