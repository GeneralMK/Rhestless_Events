# Generated by Django 4.1.4 on 2023-02-10 02:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('social_django', '0011_alter_association_id_alter_code_id_alter_nonce_id_and_more'),
        ('socialaccount', '0003_extra_data_default_dict'),
        ('token_blacklist', '0011_linearizes_history'),
        ('admin', '0003_logentry_add_action_flag_choices'),
        ('authtoken', '0003_tokenproxy'),
        ('account', '0002_email_max_length'),
        ('main', '0004_rename_myuser_users'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Users',
            new_name='MyUser',
        ),
        migrations.RenameField(
            model_name='host',
            old_name='name',
            new_name='first_name',
        ),
    ]