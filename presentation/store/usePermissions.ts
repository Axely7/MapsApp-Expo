import { PermissionStatus } from '@/infrastructure/interfaces/location'
import {create} from 'zustand'

interface  PermissionsState {
    locationStatus: PermissionStatus

    requestLocationPermission: () => Promise<PermissionStatus>;
}