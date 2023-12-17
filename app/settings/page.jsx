'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Settings = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handleChangePassword = async () => {
        // Validate and change password logic here
        console.log('Changing password...');

        // Add frontend validation if needed

        try {
            const response = await fetch('/api/users/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId, currentPassword, newPassword })
            });

            if (!response.ok) {
                throw new Error('Password change failed');
            }

            const data = await response.json();
            alert(data.message); // Display success message
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to change password'); // Display error message
        }
        // Redirect to dashboard or show success message
    };

    return (
        <div className='settings-page'>
            <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder='Current Password'
                className='input-field'
            />
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder='New Password'
                className='input-field'
            />
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Confirm New Password'
                className='input-field'
            />
            <button onClick={handleChangePassword} className='change-btn'>Change Password</button>
        </div>
    );
};

export default Settings;
