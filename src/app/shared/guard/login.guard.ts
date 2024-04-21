import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { StateService } from '../services/state.service';

export const loginGuard: CanActivateFn = () => {
  const router = inject(Router);
  const state = inject(StateService);
  const waiterName = sessionStorage.getItem('waiterName');
  if (!waiterName) {
    void router.navigate(['/register']);
    return false;
  }

  state.setEmployee(waiterName);
  return true;
};
