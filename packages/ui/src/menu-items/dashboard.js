// assets
import React from 'react'
import { IconHierarchy, IconBuildingStore, IconKey, IconTool, IconLock, IconRobot } from '@tabler/icons'

// constant
const icons = { IconHierarchy, IconBuildingStore, IconKey, IconTool, IconLock, IconRobot }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'chatflows',
            title: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <div
                        style={{
                            borderRadius: '50%',
                            padding: '10px',
                            marginBottom: '10px'
                        }}
                    >
                        <IconHierarchy size='36' color='#E22A90' />
                    </div>
                    <span style={{ fontSize: '18px' }}>AI Workspace</span>
                </div>
            ),
            type: 'item',
            url: '/chatflows',
            breadcrumbs: true
        },
        {
            id: 'marketplaces',
            title: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <div
                        style={{
                            borderRadius: '50%',
                            padding: '10px',
                            marginBottom: '10px'
                        }}
                    >
                        <IconBuildingStore size='36' color='#E22A90' />
                    </div>
                    <span style={{ fontSize: '18px' }}>Templates</span>
                </div>
            ),
            type: 'item',
            url: '/marketplaces',
            breadcrumbs: true
        },
        {
            id: 'tools',
            title: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <div
                        style={{
                            borderRadius: '50%',
                            padding: '10px',
                            marginBottom: '10px'
                        }}
                    >
                        <IconTool size='36' color='#E22A90' />
                    </div>
                    <span style={{ fontSize: '18px' }}>Tools</span>
                </div>
            ),
            type: 'item',
            url: '/tools',
            breadcrumbs: true
        },
        {
            id: 'assistants',
            title: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <div
                        style={{
                            borderRadius: '50%',
                            padding: '10px',
                            marginBottom: '10px'
                        }}
                    >
                        <IconRobot size='36' color='#E22A90' />
                    </div>
                    <span style={{ fontSize: '18px' }}>Assistants</span>
                </div>
            ),
            type: 'item',
            url: '/assistants',
            breadcrumbs: true
        },
        {
            id: 'credentials',
            title: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <div
                        style={{
                            borderRadius: '50%',
                            padding: '10px',
                            marginBottom: '10px'
                        }}
                    >
                        <IconLock size='36' color='#E22A90' />
                    </div>
                    <span style={{ fontSize: '18px' }}>Credentials</span>
                </div>
            ),
            type: 'item',
            url: '/credentials',
            breadcrumbs: true
        },
        {
            id: 'apikey',
            title: (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <div
                        style={{
                            borderRadius: '50%',
                            padding: '10px',
                            marginBottom: '10px'
                        }}
                    >
                        <IconKey size='36' color='#E22A90' />
                    </div>
                    <span style={{ fontSize: '18px' }}>API Keys</span>
                </div>
            ),
            type: 'item',
            url: '/apikey',
            breadcrumbs: true
        }
    ]
}
export default dashboard
