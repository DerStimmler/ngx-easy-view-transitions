import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TransitionNameDirective } from 'ngx-easy-view-transitions';
import { ColorsService } from './colors.service';

type PackageManager = 'npm' | 'yarn' | 'pnpm' | 'bun';

interface PackageManagerItem {
  name: PackageManager;
  command: string;
}

@Component({
  selector: 'ngx-easy-view-transitions-colors-list',
  imports: [RouterLink, TransitionNameDirective],
  templateUrl: './colors-list.component.html',
  styleUrls: ['./colors-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block'
  }
})
export class ColorsListComponent {
  private readonly _colorsService = inject(ColorsService);

  protected readonly colors = this._colorsService.getAll();
  protected readonly selectedPackageManager = signal<PackageManager>('npm');
  protected readonly packageManagers: PackageManagerItem[] = [
    { name: 'npm', command: 'npm install ngx-easy-view-transitions' },
    { name: 'yarn', command: 'yarn add ngx-easy-view-transitions' },
    { name: 'pnpm', command: 'pnpm add ngx-easy-view-transitions' },
    { name: 'bun', command: 'bun add ngx-easy-view-transitions' }
  ];
  protected readonly copySuccess = signal(false);

  protected getInstallCommand(): string {
    const pm = this.packageManagers.find((p) => p.name === this.selectedPackageManager());
    return pm ? pm.command : '';
  }

  protected copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copySuccess.set(true);
      setTimeout(() => this.copySuccess.set(false), 2000);
    });
  }
}
