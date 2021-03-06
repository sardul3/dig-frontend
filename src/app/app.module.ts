import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/auth/http-interceptor.service';
import { AuthGuard } from './services/auth/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientModalComponent } from './components/homepage/client-modal/client-modal.component';
import { ClientComponent } from './components/client/client.component';
import { FacilityModalComponent } from './components/facility-modal/facility-modal.component';
import { FacilityComponent } from './components/facility/facility.component';
import { DigComponent } from './components/dig/dig.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipelineModalComponent } from './components/pipeline-modal/pipeline-modal.component';
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { DigSelectComponent } from './components/dig-select/dig-select.component';
import { WorkflowComponent } from './components/workflow/workflow.component';
import { WorkflowDetailComponent } from './components/workflow-detail/workflow-detail.component';
import { SecFormComponent } from './components/forms/sec-form/sec-form.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { WorkspaceDetailComponent } from './components/workspace-detail/workspace-detail.component';
import { AwsService } from './services/aws.service';
import { WorkPermitComponent } from './components/forms/work-permit/work-permit.component';
import { DigModalComponent } from './components/dig/dig-modal/dig-modal.component';
import { PipeInspectComponent } from './components/forms/pipe-inspect/pipe-inspect.component';
import { CorrosionInspectComponent } from './components/forms/corrosion-inspect/corrosion-inspect.component';
import { EncroachmentAgreeComponent } from './components/forms/encroachment-agree/encroachment-agree.component';
import { ResetPwComponent } from './components/reset-pw/reset-pw.component';
import { ResetFormComponent } from './components/reset-form/reset-form.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, LoginComponent, SignupComponent, ClientModalComponent, FacilityModalComponent, PipelineModalComponent, ClientComponent, FacilityComponent, DigComponent, PipelineComponent, DigSelectComponent, WorkflowComponent, WorkflowDetailComponent, SecFormComponent, WorkPermitComponent, PipeInspectComponent, CorrosionInspectComponent, EncroachmentAgreeComponent, WorkspaceComponent, WorkspaceDetailComponent, DigModalComponent, ResetPwComponent, ResetFormComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, NgxDatatableModule, ReactiveFormsModule, DpDatePickerModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
    StatusBar,
    SplashScreen,
    AuthGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NgxDatatableModule,
    DpDatePickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
