import { Component } from '@angular/core';
import { Plugins, GeolocationPosition } from '@capacitor/core';
import { SMS } from '@ionic-native/sms/ngx';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  loc: GeolocationPosition;

  constructor(private sms: SMS, private hotspot: Hotspot) { }

  async getCurrentPosition() {
    const { Geolocation } = Plugins;
    await Geolocation.getCurrentPosition()
      .then((location) => {
        console.log(location);
        this.loc = location;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('It is over');
      });
  }

  async sendSMS() {
    this.sms.send('9952993443', 'Hello world!');
  }

  async findWifi() {
    this.hotspot.scanWifi().then((networks: HotspotNetwork[]) => {
      console.log(networks);
    });
  }

}
