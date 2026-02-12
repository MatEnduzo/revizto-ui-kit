/**
 * Example usage of Revizto UI Kit components
 * 
 * This file demonstrates how to use all components from the Revizto UI Kit
 * in a real Lovable.dev application.
 */

import React, { useState } from 'react';
import {
  Button,
  Input,
  Dropdown,
  Modal,
  Badge,
  Status,
  ListItem,
  Checkbox,
  RadioButton,
  Toggle,
  Alert
} from '@/components/revizto-ui-kit';

export default function ExamplePage() {
  // State management
  const [inputValue, setInputValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [checkbox, setCheckbox] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [toggle, setToggle] = useState(false);

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '32px' }}>Revizto UI Kit Example</h1>

      {/* Buttons Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '16px' }}>Buttons</h2>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      {/* Form Elements */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '16px' }}>Form Elements</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
          <Input
            placeholder="Enter your name..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          
          <Dropdown
            options={['React', 'Vue', 'Angular', 'Svelte']}
            value={dropdownValue}
            onChange={setDropdownValue}
            placeholder="Select framework..."
          />
        </div>
      </section>

      {/* Modal Example */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '16px' }}>Modal</h2>
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
      </section>

      {/* Badges & Status */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '16px' }}>Badges & Status</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Badge variant="default">New</Badge>
            <Badge variant="accent">Beta</Badge>
            <Badge variant="primary">Pro</Badge>
          </div>
          
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Status variant="neutral">Active</Status>
            <Status variant="success">Success</Status>
            <Status variant="error">Failed</Status>
            <Status variant="warning">Pending</Status>
            <Status variant="info">Running</Status>
          </div>
        </div>
      </section>

      {/* List */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '16px' }}>List</h2>
        <div style={{ 
          maxWidth: '600px', 
          border: '1px solid #e7e7e7', 
          borderRadius: '4px',
          overflow: 'hidden'
        }}>
          <ListItem 
            selected={selectedItem === 1}
            onClick={() => setSelectedItem(1)}
          >
            First item - Click to select
          </ListItem>
          <ListItem 
            selected={selectedItem === 2}
            onClick={() => setSelectedItem(2)}
          >
            Second item - Hover to see effect
          </ListItem>
          <ListItem 
            selected={selectedItem === 3}
            onClick={() => setSelectedItem(3)}
          >
            Third item - Selected state is blue
          </ListItem>
        </div>
      </section>

      {/* Form Controls */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '16px' }}>Form Controls</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
          <div>
            <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>Checkbox</h3>
            <Checkbox 
              label="I agree to the terms and conditions"
              checked={checkbox}
              onChange={setCheckbox}
            />
          </div>

          <div>
            <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>Radio Buttons</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <RadioButton 
                label="Option 1"
                checked={radioValue === 'option1'}
                onChange={() => setRadioValue('option1')}
              />
              <RadioButton 
                label="Option 2"
                checked={radioValue === 'option2'}
                onChange={() => setRadioValue('option2')}
              />
              <RadioButton 
                label="Option 3"
                checked={radioValue === 'option3'}
                onChange={() => setRadioValue('option3')}
              />
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>Toggle</h3>
            <Toggle 
              label="Enable notifications"
              hint="Receive email notifications for updates"
              checked={toggle}
              onChange={setToggle}
            />
          </div>
        </div>
      </section>

      {/* Alerts */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '16px' }}>Alerts</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Alert variant="info">
            Your changes have been saved successfully.
          </Alert>
          <Alert variant="warning">
            Your trial period will expire in 3 days.
          </Alert>
          <Alert variant="error">
            An error occurred while processing your request. Please try again.
          </Alert>
        </div>
      </section>

      {/* Modal Component */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Confirm Action"
        footer={
          <>
            <Button variant="ghost" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant="primary" 
              onClick={() => {
                alert('Action confirmed!');
                setModalOpen(false);
              }}
            >
              Confirm
            </Button>
          </>
        }
      >
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          Are you sure you want to proceed with this action? This operation cannot be undone.
        </p>
      </Modal>
    </div>
  );
}