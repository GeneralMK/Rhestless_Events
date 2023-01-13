# Generated by Django 4.1.4 on 2023-01-13 07:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=100, null=True)),
                ('staff', models.BooleanField(default=False)),
                ('active', models.BooleanField(default=True)),
                ('admin', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name_plural': '1. User',
            },
        ),
        migrations.CreateModel(
            name='AddEvent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_name', models.CharField(max_length=150)),
                ('type', models.CharField(choices=[('Private', 'Private'), ('Public', 'Public')], max_length=200, null=True)),
                ('details', models.TextField(null=True)),
                ('venue', models.CharField(max_length=100)),
                ('price', models.FloatField(default=0.0)),
                ('featured_img', models.ImageField(null=True, upload_to='event_images/')),
            ],
            options={
                'verbose_name_plural': '3. Add Events',
            },
        ),
        migrations.CreateModel(
            name='EventCategotry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('details', models.TextField(null=True)),
            ],
            options={
                'verbose_name_plural': '2. Event Category',
            },
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_time', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name_plural': '5. Orders',
            },
        ),
        migrations.CreateModel(
            name='Participants',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('last_name', models.CharField(max_length=100, null=True)),
                ('email', models.CharField(default='example@gmail.com', max_length=100, null=True)),
                ('password', models.CharField(default='pass', max_length=100, null=True)),
                ('address', models.TextField(null=True)),
                ('mobile_no', models.PositiveBigIntegerField()),
            ],
            options={
                'verbose_name_plural': '4. Participants',
            },
        ),
        migrations.CreateModel(
            name='ParticipantAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.TextField(null=True)),
                ('default_address', models.BooleanField(default=False)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer_addresses', to='main.participants')),
            ],
            options={
                'verbose_name_plural': '7. Participant Address',
            },
        ),
        migrations.CreateModel(
            name='OrderItems',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.addevent')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_items', to='main.order')),
            ],
            options={
                'verbose_name_plural': '6. Order Items',
            },
        ),
        migrations.AddField(
            model_name='order',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer_orders', to='main.participants'),
        ),
        migrations.CreateModel(
            name='Host',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=100, null=True)),
                ('last_name', models.CharField(max_length=100, null=True)),
                ('email', models.CharField(max_length=255, unique=True)),
                ('password', models.CharField(max_length=100, null=True)),
                ('user', models.ForeignKey(blank=True, default='none', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': '1. Hosts',
            },
        ),
        migrations.AddField(
            model_name='addevent',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='category_products', to='main.eventcategotry'),
        ),
        migrations.AddField(
            model_name='addevent',
            name='host',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='main.host'),
        ),
    ]
