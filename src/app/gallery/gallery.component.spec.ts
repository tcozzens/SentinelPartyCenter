/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';

describe('Component: Gallery', () => {
  it('should create an instance', () => {
    let component = new GalleryComponent();
    expect(component).toBeTruthy();
  });
});
