# Credit-based Enrollment Plugin for Moodle

This plugin enables course enrollment through a user credit system, where users can spend credits to enroll in courses.

## Features

- **Credit System**: Uses a custom user profile field to store and manage user credits
- **Course Specific Credit Cost**: Set different credit costs for different courses
- **Credit Balance Check**: Automatically checks and displays current credit balance before enrollment
- **Credit Deduction**: Automatically deducts credits upon successful enrollment
- **Enrollment Restrictions**: Support for enrollment keys, enrollment period, and maximum enrollments
- **Admin Tools**: Settings to configure plugin behavior and default values

## Installation

1. Extract the plugin directory (`enrol_credit`) to the `enrol` directory in your Moodle installation.
2. Visit the admin notifications page to complete the installation process.
3. The plugin will automatically create a user profile field for credits if it doesn't exist.

## Configuration

1. Go to Site Administration > Plugins > Enrollments > Credit Enrollment
2. Configure the global settings:
   - Credit field name: The name of the user profile field to store credits
   - Default credit cost: Default number of credits required for enrollment
   - Default status: Whether the plugin is enabled by default for new courses
   - Other standard enrollment settings (role, period, etc.)

## Usage

### For Course Administrators

1. Go to Course Administration > Users > Enrollment methods
2. Add the "Credit enrollment" method
3. Configure the enrollment settings:
   - Credits required: The number of credits needed to enroll in the course
   - Enrollment key (optional): Password protection for enrollment
   - Enrollment period: How long the enrollment is valid
   - Maximum number of users: Limit on total enrollments

### For Students/Users

1. Navigate to a course that has credit enrollment enabled
2. View the credit requirement and your current credit balance
3. Click "Enroll me" to spend credits and gain access to the course
4. Enter an enrollment key if required

## Adding Credits to Users

Administrators can add credits to users through user profile editing or through the bulk user actions interface.

## License

This plugin is licensed under the GNU GPL v3 or later. See the LICENSE file for details.

## Credits

- Developed by [Your Name] for [Your Organization]
- Icon based on Feather icons (MIT licensed)