# Generated by Django 4.1 on 2022-09-20 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_remove_order_product_alter_order_customer_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='participantaddress',
            name='default_address',
            field=models.BooleanField(default=False),
        ),
    ]
