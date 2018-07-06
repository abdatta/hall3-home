import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UsersService } from './services/users/users.service';

@Injectable()
export class UsersGuard implements CanActivate {

  constructor(
    private usersService: UsersService,
    private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Promise<boolean> {
    return this.usersService.check()
      .then((result: boolean) => {
        if (!result) {
          this.router.navigateByUrl('/login?next=' + encodeURIComponent(state.url));
        }
        return result;
      });
  }
}

@Injectable()
export class LogInGuard implements CanActivate {

  constructor(
    private usersService: UsersService,
    private router: Router) {}

  canActivate(): Promise<boolean> {
    return this.usersService.check()
      .then((result: boolean) => {
        if (result) {
          this.router.navigateByUrl('/user/dashboard');
        }
        return !result;
      });
  }
}

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private usersService: UsersService,
    private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Promise<boolean> {
    return this.usersService.checkAdmin()
      .then((result: boolean) => {
        if (!result) {
          this.router.navigateByUrl('/login');
        }
        return result;
      });
  }
}

@Injectable()
export class LevelGuard implements CanActivate {

  constructor(
    private usersService: UsersService,
    private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Promise<boolean> {
                const levels = route.data['levels'] as string[];
                return this.usersService.checkLevel(levels)
                  .then((result: boolean) => {
                    if (!result) {
                      this.router.navigateByUrl('/login');
                    }
                    return result;
                  });
  }
}
